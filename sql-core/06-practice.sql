.headers on
.mode box

.print '--- P1: RequestId, Address, and department name of Pothole requests ---'
SELECT s.RequestId, s.Address, d.Name AS Department
FROM ServiceRequests s
INNER JOIN Departments d ON
d.DepartmentId = s.DepartmentId
WHERE s.Category = 'Pothole';


.print '--- P2: number of OPEN requests per department (only departments that have some) ---'
SELECT d.Name AS Department,
        COUNT(*) AS Request
FROM Departments d 
INNER JOIN ServiceRequests s
ON d.DepartmentId = s.DepartmentId
WHERE s.Status = 'Open'
GROUP BY d.Name;


.print '--- P3: ALL departments with their number of OPEN requests, including zero ---'
SELECT d.Name AS Department, COUNT(s.RequestId) AS OpenRequests
FROM Departments d
LEFT JOIN ServiceRequests s ON d.DepartmentId = s.DepartmentId AND s.Status = 'Open'
GROUP BY d.DepartmentId;

.print '--- P4: departments whose total DaysOpen is over 20 ---'
SELECT d.Name AS Department, SUM(s.DaysOpen) AS TotalDays
FROM Departments d
INNER JOIN ServiceRequests s ON d.DepartmentId = s.DepartmentId
GROUP BY d.DepartmentId
HAVING SUM(s.DaysOpen) > 20;