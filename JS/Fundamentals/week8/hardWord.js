function hardWords(input) {
    let letterWords = input[0].split(" ");
    let words = input[1];
    let newSentence = [];

    for (let word of letterWords) {
        if (word.includes("_")) {
            let holeLength = 0;
            let remainder = "";
            for (let char of word) {
                if (char === "_") {
                    holeLength++;
                    word[char] = "";
                } else {
                    remainder += char;
                }
            }

            let matchingWords = words.filter((a) => a.length == holeLength);
            newSentence.push(matchingWords.shift() + remainder);
        } else {
            newSentence.push(word);
        }
    }

    console.log(newSentence.join(" "));
}

hardWords([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
