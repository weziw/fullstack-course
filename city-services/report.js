"use strict";

// ---------- Find the elements we need (once, at the start) ----------
const form = document.querySelector("#report-form");
const statusMessage = document.querySelector("#status");
const list = document.querySelector("#report-list");
const description = document.querySelector("#description");
const descCount = document.querySelector("#desc-count");
const reportCount = document.querySelector("#report-count");
const clearListButton = document.querySelector("#clear-list");

// ---------- Data kept in memory while the page is open ----------
const reports = [];      // every submitted report goes in here
let nextId = 1001;       // the next confirmation number

// ---------- Character counter ----------
// "input" fires every time the text changes (typing, pasting, deleting)
description.addEventListener("input", () => {
    descCount.textContent = `${description.value.length} / 500 characters`;
});

// ---------- Form submit ----------
form.addEventListener("submit", (event) => {
    // Stop the browser's default behavior: reloading the page
    event.preventDefault();

    // Read every field by its name="" attribute into one object:
    // { name: "...", email: "...", category: "...", address: "...", description: "..." }
    const data = Object.fromEntries(new FormData(form));

    // Build the report with a confirmation number.
    // nextId++ uses the current value, THEN adds 1 for next time.
    const report = { id: nextId++, ...data };
    reports.push(report);

    statusMessage.textContent =
        `Thank you, ${report.name}. Your report #${report.id} has been received.`;

    renderList();
    form.reset();                                   // clear the form
    descCount.textContent = "0 / 500 characters";   // reset the counter
});

//--------------- Feature B: Clear list Event Listener ---------------------------
clearListButton.addEventListener("click", () => {
    reports.length = 0;
    renderList();
    statusMessage.textContent = "List cleared.";
});

// ---------- Draw the list from the reports array ----------
function renderList() {
    list.replaceChildren();
    reportCount.textContent = reports.length;  // <- update the live count in the heading
    clearListButton.disabled = reports.length === 0;   // true when empty
    for (const r of reports) {
        const item = document.createElement("li");
        item.textContent = `#${r.id} - ${r.category} at ${r.address}`;
        list.append(item);
    }
}

renderList();   // draw once at startup so the button starts disabled