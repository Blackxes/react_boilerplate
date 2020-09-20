set /p "repo=Repository name:"
git init
git remote add origin %repo%

if %errorlevel% neq 0 pause

exit