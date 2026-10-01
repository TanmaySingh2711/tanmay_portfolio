#!/usr/bin/env bash
# One-click setup for macOS / Linux: checks Node.js and installs dependencies.
set -euo pipefail

cd "$(dirname "$0")"

MIN_NODE_MAJOR=20

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR] Node.js is not installed. Install Node.js ${MIN_NODE_MAJOR}+ from https://nodejs.org and re-run." >&2
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "[ERROR] npm was not found on PATH. Reinstall Node.js from https://nodejs.org and re-run." >&2
  exit 1
fi

NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if [ "$NODE_MAJOR" -lt "$MIN_NODE_MAJOR" ]; then
  echo "[ERROR] Node.js ${MIN_NODE_MAJOR}+ is required, found $(node -v)." >&2
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
