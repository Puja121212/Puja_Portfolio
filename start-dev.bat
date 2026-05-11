@echo off
echo Starting MERN Portfolio Development Servers...
echo.

echo Starting Backend Server on port 5002...
cd backend
start "Backend Server" cmd /k "node server.js"

echo.
echo Starting Frontend Server on port 5173...
cd ../frontend
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:5002
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit...
pause
