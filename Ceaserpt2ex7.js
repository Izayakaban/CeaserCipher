const friend = "BRUTUS"
const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let result = "";

//shift each letter by the shift value
for (let i = 0; i < friend.length; i++) {
  const letter = friend[i].toLowerCase();
  const letterIndex = alphabet.indexOf(letter);
  let newIndex = (letterIndex + shiftValue) % alphabet.length;
  const newLetter = alphabet[newIndex].toUpperCase();
  result += newLetter;

  //print the new letter
  console.log(newLetter);

}

console.log("Encrypted Result:", result);

//Question 1: What avantage does uaing a loop provide over manually encrypting each letter?
//Answer 1: Well, just imagine if your friend's name was Phillius Areolus Theophrastus Bombastus Van Hohenheim...
//Doing it manually would be annoying...

//Question 2: Explain the role of % alphabet.length in our loop. How does it aid in the encryption process?
//Anser 2: In case we go past the end of the alphabet, it wraps us back around to the beginning.