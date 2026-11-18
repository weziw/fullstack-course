.headers on
.mode box

-- r and d are table ALIASES: short nicknames so you can write r.Category
-- instead of ServiceRequests.Category. They're defined right after each table name.

.print '--- J1: every request with its department NAME (INNER JOIN) ---'
SELECT r.RequestId, r.Category, d.Name AS Department
FROM ServiceRequests r
INNER JOIN Departments d ON r.DepartmentId = d.DepartmentId
ORDER BY r.RequestId;

.print '--- J2: JOIN plus WHERE: only open requests ---'
SELECT r.RequestId, r.Category, d.Name AS Department
FROM ServiceRequests r
INNER JOIN Departments d ON r.DepartmentId = d.DepartmentId
WHERE r.Status = 'Open'
ORDER BY r.RequestId;

.print '--- G1: GROUP BY: one row per department ---'
SELECT d.Name AS Department,
       COUNT(*)        AS Requests,
       SUM(r.DaysOpen) AS TotalDays
FROM ServiceRequests r
INNER JOIN Departments d ON r.DepartmentId = d.DepartmentId
GROUP BY d.Name
ORDER BY d.Name;

.print '--- L1: LEFT JOIN: ALL departments, even with zero requests ---'
SELECT d.Name AS Department, COUNT(r.RequestId) AS Requests
FROM Departments d
LEFT JOIN ServiceRequests r ON r.DepartmentId = d.DepartmentId
GROUP BY d.Name
ORDER BY d.Name;

.print '--- L2: the COUNT(*) trap: same query, wrong count for Library ---'
SELECT d.Name AS Department, COUNT(*) AS Requests
FROM Departments d
LEFT JOIN ServiceRequests r ON r.DepartmentId = d.DepartmentId
GROUP BY d.Name
ORDER BY d.Name;

.print '--- H1: HAVING: only departments averaging over 15 days open ---'
SELECT d.Name AS Department, AVG(r.DaysOpen) AS AvgDays
FROM ServiceRequests r
INNER JOIN Departments d ON r.DepartmentId = d.DepartmentId
GROUP BY d.Name
HAVING AVG(r.DaysOpen) > 15;