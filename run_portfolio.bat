@echo off
rem Starts the portfolio dev server in a centered window and opens it in the browser.
rem Press Esc to stop the server and close the window. Ctrl+C is ignored.
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
powershell -NoProfile -ExecutionPolicy Bypass -Command "$s = Get-Content -Raw -LiteralPath $env:SELF; iex ($s -split ':PORTFOLIO_PS')[-1]"
if errorlevel 1 pause
endlocal
exit /b

rem The PowerShell code below is run by the command above. cmd never runs it.
:PORTFOLIO_PS
$url = 'http://localhost:3000'

function Test-ServerUp {
  $client = New-Object Net.Sockets.TcpClient
  try { $client.Connect('127.0.0.1', 3000); return $true } catch { return $false } finally { $client.Close() }
}

# A second launch would fail because Next.js allows one dev server per project,
# so reuse the one that is already running.
if (Test-ServerUp) {
  Write-Host 'The portfolio is already running. Opening it in your browser...'
  Start-Process $url
  exit 0
}

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host '[ERROR] Node.js is not installed, so the site cannot start.'
  Write-Host 'Install Node.js 20.9 or newer from https://nodejs.org, then open run_portfolio.bat again.'
  exit 1
}

if (-not (Test-Path 'node_modules\next')) {
  Write-Host 'Dependencies not found. Running setup first...'
  $env:NO_PAUSE = '1'
  & cmd.exe /c setup.bat
  if ($LASTEXITCODE -ne 0) {
    Write-Host '[ERROR] Setup failed. Fix the error above and try again.'
    exit 1
  }
}

Write-Host "Starting your portfolio at $url"
Write-Host 'It opens in your browser as soon as the server is up.'
Write-Host 'Press Esc to stop the site and close this window.'
Write-Host ''

# Start the server first so it boots while the rest of this script runs.
# Calling Next.js through node directly skips npm's own startup time.
$server = Start-Process node -ArgumentList 'node_modules\next\dist\bin\next', 'dev' -NoNewWindow -PassThru

# Center this console window on its screen. The helper is compiled once and
# cached in %TEMP%, so later launches only load it instead of compiling it again.
try {
  $dll = Join-Path $env:TEMP 'tanmay-portfolio\ConsoleWindow-v1.dll'
  if (-not (Test-Path $dll)) {
    New-Item -ItemType Directory -Force (Split-Path $dll) | Out-Null
    Add-Type -OutputAssembly $dll -OutputType Library -TypeDefinition @'
using System;
using System.Runtime.InteropServices;

namespace Portfolio {
  public static class ConsoleWindow {
    [StructLayout(LayoutKind.Sequential)] struct RECT { public int Left, Top, Right, Bottom; }
    [StructLayout(LayoutKind.Sequential)] struct MONITORINFO { public int cbSize; public RECT rcMonitor, rcWork; public uint dwFlags; }

    [DllImport("user32.dll")] static extern bool SetProcessDPIAware();
    [DllImport("kernel32.dll")] static extern IntPtr GetConsoleWindow();
    [DllImport("user32.dll")] static extern bool GetWindowRect(IntPtr hWnd, out RECT rect);
    [DllImport("user32.dll")] static extern IntPtr MonitorFromWindow(IntPtr hWnd, uint flags);
    [DllImport("user32.dll")] static extern bool GetMonitorInfo(IntPtr monitor, ref MONITORINFO info);
    [DllImport("user32.dll")] static extern bool SetWindowPos(IntPtr hWnd, IntPtr after, int x, int y, int cx, int cy, uint flags);

    public static void Center() {
      SetProcessDPIAware();
      IntPtr h = GetConsoleWindow();
      RECT r;
      if (h == IntPtr.Zero || !GetWindowRect(h, out r)) return;
      MONITORINFO m = new MONITORINFO();
      m.cbSize = Marshal.SizeOf(typeof(MONITORINFO));
      // 2 = MONITOR_DEFAULTTONEAREST
      if (!GetMonitorInfo(MonitorFromWindow(h, 2), ref m)) return;
      int x = m.rcWork.Left + ((m.rcWork.Right - m.rcWork.Left) - (r.Right - r.Left)) / 2;
      int y = m.rcWork.Top + ((m.rcWork.Bottom - m.rcWork.Top) - (r.Bottom - r.Top)) / 2;
      // 0x5 = SWP_NOSIZE | SWP_NOZORDER
      SetWindowPos(h, IntPtr.Zero, x, y, 0, 0, 0x5);
    }
  }
}
'@
  }
  Add-Type -Path $dll
  [Portfolio.ConsoleWindow]::Center()
} catch {}

$opened = $false
$stopped = $false

# Ctrl+C arrives as a plain key press instead of a signal, so it cannot stop
# the site by accident; only Esc does.
[Console]::TreatControlCAsInput = $true
try {
  while (-not $server.HasExited) {
    while ([Console]::KeyAvailable) {
      $key = [Console]::ReadKey($true)
      if ($key.Key -eq 'Escape') {
        $stopped = $true
      }
    }
    if ($stopped) { break }

    # Open the browser as soon as the server accepts connections. The browser
    # then waits for the page to compile, so launching it overlaps that work.
    if (-not $opened -and (Test-ServerUp)) {
      Start-Process $url
      $opened = $true
    }
    Start-Sleep -Milliseconds 100
  }
} finally {
  [Console]::TreatControlCAsInput = $false
  if (-not $server.HasExited) { taskkill /PID $server.Id /T /F 2>&1 | Out-Null }
}

if ($stopped) { exit 0 }
Write-Host ''
Write-Host 'The dev server stopped unexpectedly. See the messages above.'
exit 1
