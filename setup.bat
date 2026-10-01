@echo off
rem One-click setup for Windows: checks Node.js and installs dependencies.
setlocal

cd /d "%~dp0"

set MIN_NODE_MAJOR=20

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js is not installed. Install Node.js %MIN_NODE_MAJOR%+ from https://nodejs.org and re-run.
  goto :fail
)

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm was not found on PATH. Reinstall Node.js from https://nodejs.org and re-run.
  goto :fail
)

for /f "tokens=1 delims=." %%v in ('node -v') do set NODE_MAJOR=%%v
set NODE_MAJOR=%NODE_MAJOR:v=%
if %NODE_MAJOR% LSS %MIN_NODE_MAJOR% (
  echo [ERROR] Node.js %MIN_NODE_MAJOR%+ is required, found version %NODE_MAJOR%.
  goto :fail
)

echo Using Node.js major version %NODE_MAJOR%
echo Installing dependencies...

if exist package-lock.json (
  call npm ci
) else (
  call npm install
)
if errorlevel 1 (
  echo [ERROR] Dependency install failed.
  goto :fail
)

echo.
echo Setup complete. Double-click run_dev.bat to start the site,
echo or run:  npm run dev   and open http://localhost:3000
if not defined CI if not defined NO_PAUSE pause
endlocal
exit /b 0

:fail
if not defined CI if not defined NO_PAUSE pause
endlocal
exit /b 1
