.print '--- T1: all Graffiti requests (all columns) ---'
SELECT * FROM ServiceRequests 
WHERE Category = 'Graffiti';

.print '--- T2: RequestId and Address of closed requests ---'
SELECT RequestId, Address FROM ServiceRequests
WHERE Status = 'Closed';

.print '--- T3: open requests, fewest days open first ---'
SELECT * FROM ServiceRequests
WHERE Status = 'Open'
ORDER BY DaysOpen ASC;

.print '--- T4: how many Pothole requests ---'
SELECT COUNT(*) FROM ServiceRequests
WHERE Category = 'Pothole';

.print '--- T5: the single oldest OPEN request ---'
SELECT * FROM ServiceRequests
WHERE Status = 'Open'
ORDER BY DaysOpen DESC
LIMIT 1;