//Every file in Javascript has a type. typeof tells you which one.
console.log(typeof "Riverside");
console.log(typeof 42);
console.log(typeof 3.14)
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof [1, 2, 3]);
console.log(typeof { city: "Riverside" });

//Decimal math is not exaclty in binary. Inteviewers love this one.
console.log("0.1 + 0.2 = ",0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//For money, work in whole cents and then convert at the end.
const priceInCents = 1999;
console.log("pricepercents in dollars is: $", priceInCents / 100);

//const: the name can never point to a different value. Use it by default.
const city = "Riverside";

//let: Use only when the value must change.
let openRequests = 3;
openRequests++;
console.log(openRequests);

//Block people: a variable lives only inside the {} where it is declared.
if (openRequests > 2) {
    const message = "Busy day";
    console.log(message);
}

//console.log(message) //Uncomment begining to demonstrate error.

//const stops reassignemnt, NOT changes inside an object or array.
const request = { id: 1, status: "Open" };
request.status = "Closed";
console.log(request);

const categories = ["Pothole"];
categories.push("Graffiti");
console.log(categories);