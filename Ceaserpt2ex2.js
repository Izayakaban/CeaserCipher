const friend = "BRUTUS"
const shift = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const letter = friend[0].toLowerCase();
const letterIndex = alphabet.indexOf(letter);

console.log("First letter index:", letterIndex);

//Question 1: Oh, I know B is the 2nd letter of the alphabet. Then, why the result is 1 instead of 2?
//Answer:Because arrays start a zero instead of one.

console.log("Original letter:", alphabet[letterIndex]);

const shiftedIndex = (letterIndex + shift) % 26;
const shiftedLetter = alphabet[shiftedIndex];

console.log("Shifted letter:", shiftedLetter);

//Question 2: If we continue shifting letters and go beyond the last letter, "z", which operator
//  could help us to wrap around and continue from the beginning of the alphabet? 
//Answer: The modulo thing (%).

const alphabetSize = alphabet.length;
console.log("Alphabet size:", alphabetSize);

const encryptedMessage = "EUXWXV"
const teaser = encryptedMessage.slice(0, 3);
console.log("Teaser:", teaser);