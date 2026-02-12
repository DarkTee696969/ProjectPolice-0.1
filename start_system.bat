@echo off

:: เริ่ม MySQL แบบไม่โชว์หน้าต่าง
start "" /min C:\xampp\mysql\bin\mysqld.exe --defaults-file=C:\xampp\mysql\bin\my.ini

timeout /t 5 >nul

:: รัน Node แบบซ่อนหน้าต่าง
wscript "C:\xampp\htdocs\ProjectPolice\backend\run_hidden.vbs"

timeout /t 3 >nul

:: เปิดเว็บ
start "" http://localhost:3000

exit
