#!/usr/bin/env bash
# One-click setup for macOS / Linux: checks Node.js and installs dependencies.
set -euo pipefail

cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR] Node.js is not installed. Install Node.js 20.9 or newer from https://nodejs.org and re-run." >&2
  exit 1
fi

# The minimum version comes from "engines" in package.json.
MIN_NODE="$(node -p 'require("./package.json").engines.node.match(/[\d.]+/)[0]')"

if ! command -v npm >/dev/null 2>&1; then
  echo "[ERROR] npm was not found on PATH. Reinstall Node.js from https://nodejs.org and re-run." >&2
  exit 1
fi

if ! node -e '
  const min = process.argv[1].split(".").map(Number);
  const cur = process.versions.node.split(".").map(Number);
  for (let i = 0; i < 3; i++) if (cur[i] !== min[i]) process.exit(cur[i] > min[i] ? 0 : 1);
' "$MIN_NODE"; then
  echo "[ERROR] Node.js ${MIN_NODE} or newer is required, found $(node -v)." >&2
  exit 1
fi

echo "Using Node.js $(node -v), npm $(npm -v)"
echo "Installing dependencies..."

if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo
echo "Setup complete. Start the dev server with:  npm run dev"
echo "Then open http://localhost:3000"
