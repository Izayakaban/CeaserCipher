const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

guests.BRUTUS = {
  title: "Senator",
  region: "Rome",
  dietaryPreference: "Vegan",
  pastGifts: ["Silver Dagger", "Marble Bust"]
};

guests.CICERO.pastGifts.push("Golden Lyre");

console.log(guests.ANTONY.region)

delete guests.CICERO;

const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

console.log(guests);

//Question 1: After executing step 5, what will be the region of ANTONY in the original guests object?
//Answer: It will be "Egypt" because generalProfile is a reference to the ANTONY object in guests.