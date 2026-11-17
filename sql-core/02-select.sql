.headers on
.mode box

.print '--- Q1: everything ---'
SELECT * FROM ServiceRequests;

.print '--- Q2: just two columns (like map) ---'
SELECT RequestId, Category FROM ServiceRequests;

.print '--- Q3: only open requests (like filter) ---'
SELECT RequestId, Category, Status FROM ServiceRequests
WHERE Status = 'Open';

.print '--- Q4: two conditions together ---'
SELECT RequestId, Category, DaysOpen FROM ServiceRequests
WHERE Status = 'Open' AND DaysOpen > 10;

.print '--- Q5: oldest first (like toSorted) ---'
SELECT RequestId, Category, DaysOpen FROM ServiceRequests
ORDER BY DaysOpen DESC;

.print '--- Q6: the 3 oldest ---'
SELECT RequestId, DaysOpen FROM ServiceRequests
ORDER BY DaysOpen DESC
LIMIT 3;

.print '--- Q7: how many are open (like filter + length) ---'
SELECT COUNT(*) AS OpenCount FROM ServiceRequests
WHERE Status = 'Open';

.print '--- Q8: total days open across all requests (like reduce) ---'
SELECT SUM(DaysOpen) AS TotalDays FROM ServiceRequests;