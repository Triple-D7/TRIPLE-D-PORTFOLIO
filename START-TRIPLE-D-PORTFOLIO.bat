@echo off
setlocal
title Triple D Portfolio - Local Development

set "PROJECT_DIR=C:\Users\DAMILOLA\OneDrive\Documents\mycode\pycharm\New work\TRIPLE-D-PORTFOLIO\personal-portfolio"

cd /d "%PROJECT_DIR%"
if errorlevel 1 goto directory_error

if not exist "package.json" goto package_error
where node >nul 2>nul
if errorlevel 1 goto node_error
where npm >nul 2>nul
if errorlevel 1 goto npm_error
if not exist "node_modules\next\package.json" goto dependencies_error
netstat -ano -p tcp | findstr /R /C:":3007[ ]" >nul
if not errorlevel 1 goto port_error

echo Starting the Triple D Portfolio development server...
echo Local URL: http://localhost:3007
echo Press Ctrl+C in this window to stop the server.
echo.
call npm run dev -- --port=3007
set "SERVER_EXIT_CODE=%ERRORLEVEL%"
if not "%SERVER_EXIT_CODE%"=="0" (
    echo.
    echo ERROR: The development server exited with code %SERVER_EXIT_CODE%.
    echo If port 3007 is in use, stop the other process and try again.
    echo Check the messages above for details.
) else (
    echo.
    echo The development server has stopped.
)
pause
goto end

:directory_error
echo ERROR: Could not navigate to the project directory:
echo %PROJECT_DIR%
pause
goto end

:package_error
echo ERROR: package.json was not found in the project directory.
pause
goto end

:node_error
echo ERROR: Node.js was not found. Install Node.js, then try again.
pause
goto end

:npm_error
echo ERROR: npm was not found. Install Node.js with npm, then try again.
pause
goto end

:dependencies_error
echo ERROR: Project dependencies are not installed.
echo Open Command Prompt in this project folder and run: npm install
echo Then double-click this file again.
pause
goto end

:port_error
echo ERROR: Port 3007 is already in use.
echo Stop the process using port 3007, then double-click this file again.
pause
goto end

:end
endlocal
