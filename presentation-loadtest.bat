@echo off
echo =======================================================
echo 🔥 INITIATING MASSIVE LOAD TEST... FIRE IN THE HOLE! 🔥
echo =======================================================
echo.
echo Check your Grafana Dashboards NOW to see the CPU and Event Loop spikes!
echo.
npx loadtest -n 15000 -c 150 http://localhost:5000/
echo.
echo =======================================================
echo ✅ LOAD TEST COMPLETE. 
echo =======================================================
pause
