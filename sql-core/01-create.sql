-- Turn on foreign key checking (SQLite needs this; SQL Server does it automatically)
PRAGMA foreign_keys = ON;

-- Start fresh each time this script runs
DROP TABLE IF EXISTS ServiceRequests;
DROP TABLE IF EXISTS Departments;

CREATE TABLE Departments (
    DepartmentId INTEGER PRIMARY KEY,
    Name         TEXT NOT NULL UNIQUE
);

CREATE TABLE ServiceRequests (
    RequestId    INTEGER PRIMARY KEY,
    Category     TEXT    NOT NULL,
    Address      TEXT    NOT NULL,
    Status       TEXT    NOT NULL CHECK (Status IN ('Open', 'Closed')),
    DaysOpen     INTEGER NOT NULL,
    DepartmentId INTEGER NOT NULL REFERENCES Departments(DepartmentId)
);

INSERT INTO Departments (DepartmentId, Name) VALUES
    (1, 'Public Works'),
    (2, 'Public Utilities'),
    (3, 'Parks');

INSERT INTO ServiceRequests (RequestId, Category, Address, Status, DaysOpen, DepartmentId) VALUES
    (1, 'Pothole',     '3900 Main St',       'Open',   12, 1),
    (2, 'Graffiti',    '4080 Lemon St',      'Closed',  3, 3),
    (3, 'Pothole',     '2300 Reports Ave',   'Open',   40, 1),
    (4, 'Streetlight', '300 Magnolia Ave',   'Open',    5, 2),
    (5, 'Graffiti',    '6100 Market St',     'Open',   22, 3),
    (6, 'Streetlight', '50208 Central Ave',  'Closed',  9, 2);