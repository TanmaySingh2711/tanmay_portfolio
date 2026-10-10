@echo off
rem Starts the portfolio dev server in a centered window and opens it in the browser,
rem running setup first if dependencies are missing.
setlocal

cd /d "%~dp0"

rem Windows Terminal windows cannot be moved from a script, so reopen in a classic console window.
if defined WT_SESSION (
  set WT_SESSION=
  start "" conhost.exe cmd.exe /c "%~f0"
  exit /b 0
)

title Tanmay Portfolio
set "SELF=%~f0"
powershell -NoProfile -ExecutionPolicy Bypass -Command "$s = Get-Content -Raw -LiteralPath $env:SELF; iex ($s -split ':CENTER_WINDOW')[-1]" >nul 2>nul

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js is not installed, so the site cannot start.
  echo Install Node.js 20+ from https://nodejs.org, then open run_portfolio.bat again.
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

rem Opens the browser in the background once the server starts listening.
start "" /b powershell -NoProfile -ExecutionPolicy Bypass -Command "for ($i = 0; $i -lt 180; $i++) { try { $c = New-Object Net.Sockets.TcpClient; $c.Connect('localhost', 3000); $c.Close(); Start-Process 'http://localhost:3000'; break } catch { Start-Sleep -Seconds 1 } }"

echo Starting dev server at http://localhost:3000  (press Ctrl+C to stop)
echo The site will open in your browser when it is ready.
call npm run dev
if errorlevel 1 pause
endlocal
exit /b

rem The PowerShell code below is read by the centering command above. cmd never runs it.
:CENTER_WINDOW
Add-Type -AssemblyName System.Windows.Forms
Add-Type -Namespace Portfolio -Name Win -MemberDefinition @'
[StructLayout(LayoutKind.Sequential)] public struct RECT { public int Left, Top, Right, Bottom; }
[DllImport("user32.dll")] public static extern bool SetProcessDPIAware();
[DllImport("kernel32.dll")] public static extern IntPtr GetConsoleWindow();
[DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr hWnd, out RECT rect);
[DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr hWnd, IntPtr after, int x, int y, int cx, int cy, uint flags);
'@
[void][Portfolio.Win]::SetProcessDPIAware()
$h = [Portfolio.Win]::GetConsoleWindow()
$r = New-Object Portfolio.Win+RECT
[void][Portfolio.Win]::GetWindowRect($h, [ref]$r)
$area = [System.Windows.Forms.Screen]::FromHandle($h).WorkingArea
$x = $area.Left + [int](($area.Width - ($r.Right - $r.Left)) / 2)
$y = $area.Top + [int](($area.Height - ($r.Bottom - $r.Top)) / 2)
# 0x5 = SWP_NOSIZE | SWP_NOZORDER
[void][Portfolio.Win]::SetWindowPos($h, [IntPtr]::Zero, $x, $y, 0, 0, 0x5)
