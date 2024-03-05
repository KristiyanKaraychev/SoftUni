function wordsTracker(input) {
    let repeatingWords = {};
    let firstWords = input.shift().split(" ");

    for (word of firstWords) {
        if (repeatingWords.hasOwnProperty(word)) {
            repeatingWords[word]++;
        } else {
            repeatingWords[word] = 0;
        }
    }

    input.forEach((word) => {
        if (repeatingWords.hasOwnProperty(word)) {
            repeatingWords[word]++;
        }
    });

    let sortedArr = Object.entries(repeatingWords);

    sortedArr.sort((a, b) => {
        return b[1] - a[1];
    });

    sortedArr.forEach((entry) => {
        console.log(`${entry[0]} - ${entry[1]}`);
    });
}

wordsTracker([
    "is the",

    "first",
    "sentence",
    "Here",
    "is",

    "another",
    "the",
    "And",
    "finally",
    "the",

    "the",
    "sentence",
]);
