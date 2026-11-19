.headers on
.mode box

.print '--- W1: number ALL requests, oldest first ---'
SELECT RequestId, DaysOpen,
       ROW_NUMBER() OVER (ORDER BY DaysOpen DESC) AS Position
FROM ServiceRequests
ORDER BY Position;

.print '--- W2: number requests WITHIN each department (PARTITION BY) ---'
SELECT d.Name AS Department, r.RequestId, r.DaysOpen,
       ROW_NUMBER() OVER (
         PARTITION BY r.DepartmentId
         ORDER BY r.DaysOpen DESC
       ) AS RankInDept
FROM ServiceRequests r
INNER JOIN Departments d ON d.DepartmentId = r.DepartmentId
ORDER BY d.Name, RankInDept;

.print '--- W3: the OLDEST request in each department (CTE + ROW_NUMBER) ---'
WITH Ranked AS (
  SELECT d.Name AS Department, r.RequestId, r.DaysOpen,
         ROW_NUMBER() OVER (
           PARTITION BY r.DepartmentId
           ORDER BY r.DaysOpen DESC
         ) AS RankInDept
  FROM ServiceRequests r
  INNER JOIN Departments d ON d.DepartmentId = r.DepartmentId
)
SELECT Department, RequestId, DaysOpen
FROM Ranked
WHERE RankInDept = 1
ORDER BY Department;

.print '--- W4: each request next to its department total (no collapsing) ---'
SELECT r.RequestId, d.Name AS Department, r.DaysOpen,
       SUM(r.DaysOpen) OVER (PARTITION BY r.DepartmentId) AS DeptTotal
FROM ServiceRequests r
INNER JOIN Departments d ON d.DepartmentId = r.DepartmentId
ORDER BY r.RequestId;