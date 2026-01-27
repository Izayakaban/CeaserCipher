const guests = ["ANTONY", "CICERO", "CASSIUS","CLEOPATRA"];

guests.unshift("BRUTUS");


//QUESTION 1: How can you verify that BRUTUS was added to the beginning of the array?
//Answer: use a loop like this
console.log(guests);

guests.push("AUGUSTUS", "LUCIA");

const check = guests.indexOf("Spartacus");
console.log(check);

//QUESTION 2: What would the value of spartacusIndex be if SPARTACUS wasn't invited?
//Answer: It would be -1. Returns -1 when value is not found

const removeGuest = guests.indexOf("CASSIUS");
if (removeGuest !== -1) {
    guests.splice(removeGuest, 1);
    console.log(guests);
}

const specialGuests = guests.slice(0,3);
console.log(specialGuests);

const honoredGuest = guests.slice(0,1);
console.log(honoredGuest);

const otherGuests = guests.slice(1);
console.log(otherGuests);
otherGuests.sort();
sortedGuests = otherGuests.concat(honoredGuest);
console.log(sortedGuests);