const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
let firstLocation = "";

if (emblemClue1 === "Eagle"){
    firstLocation = "Forum";
    console.log("Location starts with 'Forum'");
} else if (emblemClue1 === "Lion"){
    firstLocation = "Colloseum";
    console.log("Location starts with 'Colloseum'");
} else {
    firstLocation = "Villa";
    console.log("Location starts with 'Villa'");
}

if (emblemClue2 === "Laurel" && firstLocation === "Forum"){
    firstLocation += " of Augustus";
    console.log("Added 'of Augustus'");
} else if (emblemClue2 === "Grapes" || firstLocation === "Villa"){
    firstLocation += " of Pompey";
    console.log("Added 'of Pompey'");
}

switch (emblemClue3){
    case 3:
        firstLocation += " South";
        console.log("Added 'South'");
        break;
    case 9:
        firstLocation += " East";
        console.log("Added 'East'");
        break;
    case 4:
        firstLocation += " West";
        console.log("Added 'West'");
        break;
    case 7:
        firstLocation += " North";
        console.log("Added 'North'");
        break;
}

//Question: Why is it important to be careful when using == (double equals)
//  instead of === (triple equals) in our conditionals? 

//Answer: Because using === checks for both value and type