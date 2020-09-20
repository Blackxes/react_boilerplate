set /p "message=Commit message:"
set /p "force=Force push?: (y/n == anything else)"
git add .
git commit -m "%message%"

if %force% equ "y" git push -f origin master
if %force% neq "y" git push origin master

pause