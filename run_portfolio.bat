@echo off
rem Starts the portfolio dev server in a centered window and opens it in the browser.
rem Press Esc (or Ctrl+C) to stop the server and close the window.
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

# Center this console window on its screen.
try {
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
} catch {}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  Write-Host '[ERROR] Node.js is not installed, so the site cannot start.'
  Write-Host 'Install Node.js 20+ from https://nodejs.org, then open run_portfolio.bat again.'
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
Write-Host 'It opens in your browser as soon as the page is ready.'
Write-Host 'Press Esc to stop the site and close this window.'
Write-Host ''

$server = Start-Process cmd.exe -ArgumentList '/c', 'npm run dev' -NoNewWindow -PassThru

# Request the page before opening the browser, so the first compile is already done
# and the browser shows the finished page right away.
Add-Type -AssemblyName System.Net.Http
$http = New-Object System.Net.Http.HttpClient
$http.Timeout = [TimeSpan]::FromMinutes(3)
$warmup = $null
$nextTry = [DateTime]::Now
$opened = $false
$stopped = $false

# Ctrl+C arrives as a key press, so both Esc and Ctrl+C shut down cleanly.
[Console]::TreatControlCAsInput = $true
try {
  while (-not $server.HasExited) {
    while ([Console]::KeyAvailable) {
      $key = [Console]::ReadKey($true)
      if ($key.Key -eq 'Escape' -or ($key.Key -eq 'C' -and ($key.Modifiers -band [ConsoleModifiers]::Control))) {
        $stopped = $true
      }
    }
    if ($stopped) { break }

    if (-not $opened) {
      if ($null -eq $warmup) {
        if ([DateTime]::Now -ge $nextTry) { $warmup = $http.GetAsync($url) }
      } elseif ($warmup.IsCompleted) {
        if ($warmup.Status -eq 'RanToCompletion') {
          Start-Process $url
          $opened = $true
        } else {
          # Server is not listening yet; try again shortly.
          $warmup = $null
          $nextTry = [DateTime]::Now.AddMilliseconds(300)
        }
      }
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
