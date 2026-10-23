"use-strict";

const request = {
    id: 42,
    category: "Pothole",
    address: "3900 Main St",
    reporter: {name: "Ana", email: "ana@example.com"}
};

//Two ways to read a property
console.log(request.category);
console.log(request["address"]);

//Destructuring: Pull properties out into variables
const {id, category} = request;
console.log(id, category);

//Nested destructuring
const {reporter: {email}} = request;
console.log(email);

//Array destructuring: by position
const [first, second] = ["Open", "In progress","Closed"];
console.log(first,second);

//Spread makes a copy with changes. The original is untouched.
const updated = { ...request, status: "Closed"};
console.log(request.status, updated.status);

const moreCategories = [...["Pothole", "Graffiti"], "Streetlight"];
console.log(moreCategories);

// Optional chaining (?.) stops safely when something is missing
const anonymous = { id: 43, category: "Graffiti" };
console.log(anonymous.reporter?.email);
console.log(anonymous.reporter?.email ?? "No email on file");
// console.log(anonymous.reporter.email);   // uncomment: TypeError, crash

// Looping over an object's properties
console.log(Object.keys(anonymous));
for (const [key, value] of Object.entries(anonymous)) {
  console.log(`${key}: ${value}`);
}