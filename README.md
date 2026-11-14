# fullstack-course

Projects from my full stack developer course (JavaScript, C# 14, SQL).

## Project 0: Hello, Riverside
- JavaScript: `node js-hello/hello.js`
- C#: `dotnet run --project cs-hello`
- SQL: run `sql-hello/hello.sql` in SQL Server, or `sqlite3 < sql-hello/hello.sql`

## Project 1: City Services site - 10/17/2026
Three-page accessible site built with semantic HTML and plain CSS (Flexbox).
- Home, Report an Issue (validated form), Contact
- Lighthouse accessibility: 100 on all three pages
- Keyboard navigation tested manually
- Run it: `cd city-services && python3 -m http.server 8080`

## Project 2: Budget calculator
Node command-line app that reads department expenses and budgets from JSON files.
- Totals by department and grand total (reduce)
- Largest single expense (reduce)
- Over-budget check against quarterly budgets, showing limit, spent, and amount over (Object.entries + filter)
- Optional month filter, with a clean message when a month has no data
- Run it: `cd budget-calculator && node budget.js` or `node budget.js --month Feb`