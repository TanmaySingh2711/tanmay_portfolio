@echo off
rem One-click setup for Windows: checks Node.js and installs dependencies.
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js is not installed. Install Node.js 20.9 or newer from https://nodejs.org and re-run.
  goto :fail
)

rem The minimum version comes from "engines" in package.json.
for /f "delims=" %%v in ('node -p "require('./package.json').engines.node.match(/[\d.]+/)[0]"') do set MIN_NODE=%%v

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm was not found on PATH. Reinstall Node.js from https://nodejs.org and re-run.
  goto :fail
)

node -e "const m=process.argv[1].split('.').map(Number),c=process.versions.node.split('.').map(Number);for(let i=0;i<3;i++)if(c[i]!==m[i])process.exit(c[i]>m[i]?0:1)" %MIN_NODE%
if errorlevel 1 (
  for /f "delims=" %%v in ('node -v') do echo [ERROR] Node.js %MIN_NODE% or newer is required, found %%v.
  goto :fail
)

for /f "delims=" %%v in ('node -v') do echo Using Node.js %%v
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
echo Setup complete. Double-click run_portfolio.bat to start the site,
echo or run:  npm run dev   and open http://localhost:3000
if not defined CI if not defined NO_PAUSE pause
endlocal
exit /b 0

:fail
if not defined CI if not defined NO_PAUSE pause
endlocal
exit /b 1
