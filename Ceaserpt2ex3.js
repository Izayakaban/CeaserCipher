//generate random number between 0 and 1
const randomNumber = Math.random();
console.log("Random number between 0 and 1:", randomNumber);

//desired range of nums between 3 and 33 (both inclusive)
const range = 33 - 3 + 1;

//Question 1: Why do we add 1 to the range?
//Answer: Because the range needs to be inclusive on both sides.

const inRangeNumber = Math.random() * range + 3;
console.log("Random number between 3 and 33 (not rounded):", inRangeNumber);

//Question 2: How does multiplying randomDecimal by range help us get a number within our desired range?
//Math.random only gives a number between 0 and 1. Multiplying scales it up to the desired range.

const roundedNumber = Math.floor(inRangeNumber);
console.log("Random number between 3 and 33 (rounded):", roundedNumber);

//Question 3: Why do we use the Math.floor function here instead of other rounding methods like Math.round?
//Answer: Because Math.floor always rounds down

//Question 4: How does adding 3 to randomInt ensure that our final shiftValue is between 3 and 33?
//Answer: Because without adding three you could also get a num between 0 and 3, which is not in our wanted range.