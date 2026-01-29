const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) { 

  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    const isUpperCase = char === char.toUpperCase();
    const lowerChar = char.toLowerCase();
    const index = alphabet.indexOf(lowerChar);
    if (index === -1) {
        encryptedMessage += char; 
    } else {
        let newIndex = (index + shiftValue) % 26;
        if (newIndex < 0) {
            newIndex += 26;
        }
        let newChar = alphabet[newIndex];
        if (isUpperCase) {
            newChar = newChar.toUpperCase();
        }
        encryptedMessage += newChar;
    }
    if ((i + 1) % 2 === 0 && i !== message.length - 1) {
        const randomIndex = Math.floor(Math.random() * 26);
        const randomChar = alphabet[randomIndex];
        encryptedMessage += randomChar;
    }
  }
  return encryptedMessage;
}


//console.log(encrypt("Kermit the Frog!", 3));
//Nhhupllwf wfkhm Ipuroj!

function decrypt(encryptedMessage, shiftValue) {

// Your decryption code here
    let trueMessage = "";
    for (let i = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i];
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();
        const index = alphabet.indexOf(lowerChar);
        if (index === -1) {
            trueMessage += char; 
        } else {
            let newIndex = (index - shiftValue) % 26;
            if (newIndex < 0) {
                newIndex += 26; 
            }
            let newChar = alphabet[newIndex];
            if (isUpperCase) {
                newChar = newChar.toUpperCase();
            }
            trueMessage += newChar;
        }
    }
    let finalMessage = "";
    for (let j = 0; j < trueMessage.length; j++) {
        if ((j + 1) % 3 !== 0) {
            finalMessage += trueMessage[j];
        }
    }
    trueMessage = finalMessage;
    return trueMessage;
}

console.log(decrypt("Iuuuau juxuu cuytudyuwxuj uixuqtuemu " +
    "euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh " +
    "ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut " + 
    "urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, " + 
    "uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!", 42));

//Seek the midnight shadow of Romulus and Remus. 
// There, whisper the word 'Aurelius' to the winds. 
// And by being able to get to this message, 
// you have completed the quest!