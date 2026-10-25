#!/usr/bin/env bash
# Starts the portfolio dev server on macOS / Linux and opens it in the browser,
# running setup first if dependencies are missing.
# Press Esc to stop the server. Ctrl+C is ignored.
# Works with the bash 3.2 that ships with macOS, so no bash 4+ features.
set -uo pipefail

cd "$(dirname "$0")"

# In Git Bash on Windows, Ctrl+C reaches node.exe no matter how the terminal is
# set up, so this script could not keep Esc as the only way to stop the site.
case "$(uname -s)" in
  MINGW* | MSYS* | CYGWIN*)
    echo "On Windows, double-click run_portfolio.bat instead." >&2
    exit 1
    ;;
esac

URL="http://localhost:3000"

server_up() {
  # bash's built-in /dev/tcp, so no extra tools such as nc are needed.
  (exec 3<>/dev/tcp/127.0.0.1/3000) 2>/dev/null
}

open_url() {
  local opener=""
  if [ -n "${BROWSER:-}" ]; then opener="$BROWSER"
  elif command -v open >/dev/null 2>&1; then opener="open"          # macOS
  elif command -v xdg-open >/dev/null 2>&1; then opener="xdg-open"  # Linux
  elif command -v wslview >/dev/null 2>&1; then opener="wslview"    # WSL
  fi
  if [ -z "$opener" ] || ! "$opener" "$URL" >/dev/null 2>&1; then
    echo "Open $URL in your browser."
  fi
}

# A second launch would fail because Next.js allows one dev server per project,
# so reuse the one that is already running.
if server_up; then
  echo "The portfolio is already running. Opening it in your browser..."
  open_url
  exit 0
fi

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR] Node.js is not installed, so the site cannot start." >&2
  echo "Install Node.js 20.9 or newer from https://nodejs.org, then run ./run_portfolio.sh again." >&2
  exit 1
fi

if [ ! -d node_modules/next ]; then
  echo "Dependencies not found. Running setup first..."
  if ! bash ./setup.sh; then
    echo "[ERROR] Setup failed. Fix the error above and try again." >&2
    exit 1
  fi
fi

echo "Starting your portfolio at $URL"
echo "It opens in your browser as soon as the server is up."
[ -t 0 ] && echo "Press Esc to stop the site."
echo

# Calling Next.js through node directly skips npm's own startup time.
node node_modules/next/dist/bin/next dev &
SERVER_PID=$!

STTY_SAVED=""
stop_server() {
  # Next.js starts child processes, so stop those as well as the main one.
  if command -v pgrep >/dev/null 2>&1; then
    for child in $(pgrep -P "$SERVER_PID" 2>/dev/null); do
      pkill -TERM -P "$child" 2>/dev/null
      kill -TERM "$child" 2>/dev/null
    done
  fi
  kill -TERM "$SERVER_PID" 2>/dev/null
  wait "$SERVER_PID" 2>/dev/null
}
restore_terminal() {
  [ -n "$STTY_SAVED" ] && stty "$STTY_SAVED" 2>/dev/null
  STTY_SAVED=""
}
trap 'restore_terminal' EXIT
# Closing the terminal window (HUP) or a kill from elsewhere still stops the
# server cleanly. Ctrl+C never gets here while the key loop runs; see below.
trap 'echo; echo "Stopping the portfolio..."; restore_terminal; stop_server; exit 0' INT TERM HUP

# Read single key presses without waiting for Enter. With "min 0 time 1" a
# read returns after 0.1 s even when no key was pressed, so the loop can also
# watch the server. `dd` is used because bash's own `read -n` resets these
# terminal settings and would block until a key is pressed.
if [ -t 0 ]; then
  STTY_SAVED="$(stty -g)"
  # -isig turns Ctrl+C into a plain key press instead of a signal, so it
  # cannot stop the site; only Esc does.
  stty -echo -icanon -isig min 0 time 1
fi
read_keys() { dd bs="$1" count=1 2>/dev/null; }

opened=0
while kill -0 "$SERVER_PID" 2>/dev/null; do
  if [ "$opened" -eq 0 ] && server_up; then
    open_url
    opened=1
  fi

  if [ -t 0 ]; then
    key="$(read_keys 1)"
    if [ "$key" = $'\e' ]; then
      # Arrow keys also start with Esc, followed by more characters.
      rest="$(read_keys 8)"
      if [ -z "$rest" ]; then
        echo "Stopping the portfolio..."
        restore_terminal
        stop_server
        exit 0
      fi
    fi
  else
    sleep 0.2
  fi
done

restore_terminal
echo
echo "The dev server stopped unexpectedly. See the messages above." >&2
exit 1
