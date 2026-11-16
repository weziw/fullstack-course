"use strict";

// ---------- Settings ----------
const API_URL =
    "https://data.cityofnewyork.us/resource/erm2-nwe9.json" +
    "?$select=unique_key,created_date,complaint_type,incident_address,borough,status" +
    "&$order=created_date%20DESC" +
    "&$limit=50";

// ---------- Find the elements we need ----------
const statusMessage = document.querySelector("#status");
const searchBox = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const tableBody = document.querySelector("#results");

// ---------- Data ----------
let requests = [];   // filled once the API responds

// ---------- Load from the API ----------
// "async" lets this function use "await" to pause until a slow step finishes,
// WITHOUT freezing the page. Other code and clicks keep working meanwhile.
async function loadRequests() {
    statusMessage.textContent = "Loading the latest 311 requests…";

    try {
        // 1. Ask the server for the data. await = wait for the reply.
        const response = await fetch(API_URL);

        // 2. fetch does NOT fail on errors like 404 or 500, so check yourself.
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        // 3. Turn the JSON text into JavaScript objects. This is also async.
        requests = await response.json();

        statusMessage.textContent = `Loaded ${requests.length} requests.`;
        render();
    } catch (error) {
        // Any failure above lands here: no network, bad address, server error.
        statusMessage.textContent = `Could not load data: ${error.message}`;
    }
}

// ---------- Search and sort ----------
function getVisibleRequests() {
    const term = searchBox.value.trim().toLowerCase();

    // Keep requests whose complaint type OR address contains the search term.
    // An empty search ("") matches everything, because every string includes "".
    const matches = requests.filter(r =>
        (r.complaint_type ?? "").toLowerCase().includes(term) ||
        (r.incident_address ?? "").toLowerCase().includes(term)
    );

    // localeCompare compares text alphabetically: negative, zero, or positive.
    // The dates are in ISO format (2026-11-15T14:02), which sorts correctly as text.
    if (sortSelect.value === "oldest") {
        return matches.toSorted((a, b) => a.created_date.localeCompare(b.created_date));
    }
    if (sortSelect.value === "type") {
        return matches.toSorted((a, b) =>
            (a.complaint_type ?? "").localeCompare(b.complaint_type ?? "")
        );
    }
    return matches.toSorted((a, b) => b.created_date.localeCompare(a.created_date));
}

// ---------- Draw the table from the data ----------
function render() {
    const visible = getVisibleRequests();
    tableBody.replaceChildren();

    for (const r of visible) {
        const row = document.createElement("tr");

        // One value per column, in the same order as the headings
        const cells = [
            r.unique_key,
            new Date(r.created_date).toLocaleString("en-US"),
            r.complaint_type ?? "Unknown",
            r.incident_address ?? "No address",
            r.borough ?? "Unknown",
            r.status ?? "Unknown"
        ];

        for (const value of cells) {
            const cell = document.createElement("td");
            cell.textContent = value;   // textContent: safe from XSS
            row.append(cell);
        }

        tableBody.append(row);
    }
}

// ---------- Wire up the controls ----------
searchBox.addEventListener("input", render);   // redraw on every keystroke
sortSelect.addEventListener("change", render); // redraw when the sort changes

// ---------- Start ----------
loadRequests();