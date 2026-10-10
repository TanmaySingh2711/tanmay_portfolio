@echo off
rem Starts the local dev server, running setup first if dependencies are missing.
setlocal

cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js is not installed, so the site cannot start.
  echo Install Node.js 20+ from https://nodejs.org, then open run_dev.bat again.
  pause
  exit /b 1
)

if not exist node_modules\next (
  echo Dependencies not found. Running setup first...
  set NO_PAUSE=1
  call "%~dp0setup.bat"
  if errorlevel 1 (
    echo [ERROR] Setup failed. Fix the error above and try again.
    pause
    exit /b 1
  )
)

echo Starting dev server at http://localhost:3000  (press Ctrl+C to stop)
call npm run dev
if errorlevel 1 pause
endlocal
