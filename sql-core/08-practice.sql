.headers on
.mode box

.print '--- X1: running total of DaysOpen, in RequestId order ---'
SELECT
    RequestId,
    Category,
    Status,
    DaysOpen,
    SUM(DaysOpen) OVER (ORDER BY RequestId ASC) AS RunningTotalDays
FROM ServiceRequests
ORDER BY RequestId ASC;

.print '--- X2: the NEWEST request (fewest days open) in each department ---'
WITH RankedRequests AS (
    SELECT
        s.RequestId,
        d.Name AS Department,
        s.Category,
        s.Address,
        s.Status,
        s.DaysOpen,
        ROW_NUMBER() OVER (
            PARTITION BY s.DepartmentId
            ORDER BY s.DaysOpen ASC, s.RequestId ASC
        ) AS rn
    FROM ServiceRequests s
    JOIN Departments d ON s.DepartmentId = d.DepartmentId
)
SELECT
    RequestId,
    Department,
    Category,
    Address,
    Status,
    DaysOpen
FROM RankedRequests
WHERE rn = 1
ORDER BY Department;