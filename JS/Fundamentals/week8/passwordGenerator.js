function passwordGenerator(input) {
    let firstWord = input[0];
    let secondWord = input[1];
    let thirdWord = input[2];

    let initialPass = firstWord + secondWord;
    let thirdWordCharNum = 0;

    let vowels = ["a", "e", "i", "o", "u"];
    let newPass = "";

    for (let i = 0; i < initialPass.length; i++) {
        if (vowels.includes(initialPass[i])) {
            if (thirdWordCharNum >= thirdWord.length) {
                thirdWordCharNum = 0;
            }
            newPass += thirdWord[thirdWordCharNum].toUpperCase();
            thirdWordCharNum++;
        } else {
            newPass += initialPass[i].toLowerCase();
        }
    }

    console.log(
        `Your generated password is ${newPass.split("").reverse().join("")}`
    );
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
