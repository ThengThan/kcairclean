@echo off
title KC Air Clean - GitHub Pages Deployer
echo ====================================================
echo   KC Air Clean - Automated GitHub Pages Deployer
echo ====================================================
echo.

set /p GH_USER="Please enter your GitHub Username: "

if "%GH_USER%"=="" (
    echo Error: GitHub username cannot be empty.
    pause
    exit /b
)

echo.
echo Initializing Git repository...
git init
git add .
git commit -m "Deploy KC Air Clean Smart Bio Landing Page"
git branch -M main

echo.
echo Connecting to https://github.com/%GH_USER%/kcairclean.git ...
git remote remove origin 2>nul
git remote add origin https://github.com/%GH_USER%/kcairclean.git

echo.
echo Pushing code to GitHub...
git push -u origin main

echo.
echo ====================================================
echo   SUCCESS! Your website code is uploaded to GitHub!
echo   Your live site URL will be:
echo   https://%GH_USER%.github.io/kcairclean
echo ====================================================
echo.
pause
