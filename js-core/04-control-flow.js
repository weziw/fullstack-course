// if / else if / else

const daysOpen = 7;

if (daysOpen > 30) {
    console.log("Escalate");
} else if (daysOpen > 7) {
    console.log("Follow up");
} else {
    console.log("On track.")   
}

// switch: clean when checking one value against many options
const category = "Streetlight";

switch (category) {
    case "Pothole":
        console.log("Route to public works");
        break;
    case "Streetlight":
        console.log("Route to Public Utilities.");
        break;
    default:
        console.log("Route to 311 triage");
}

//Classic for loop: when you need the index number
for (let i = 1; i <= 3; i++) {
    console.log("Request #" + i);
}

//for ... of: when you only need each item (Prefer this)
const addresses = ["3900 Main st", "4080 Lemon st"];
for (const address of addresses) {
    console.log('Inspect ${address}');
}

//while: repeat until a condition changes
let backlog = 5;
while (backlog > 0) {
    backlog = backlog - 2;
}
console.log("Backlog left:", backlog);

//Early return: exit a function as soon as you know the answer
function priority(days) {
    if (days > 30) return "High";
    if (days > 7) return "Medium";
    return "Low";
}
console.log(priority(45), priority(10), priority(2));