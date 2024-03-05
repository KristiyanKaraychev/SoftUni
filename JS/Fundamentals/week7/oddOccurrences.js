function oddOccurrences(string) {
    let wordsArr = string.split(" ");
    let repeatingWords = {};

    for (let word of wordsArr) {
        let lowerCaseWord = word.toLowerCase();
        if (repeatingWords.hasOwnProperty(lowerCaseWord)) {
            repeatingWords[lowerCaseWord]++;
        } else {
            repeatingWords[lowerCaseWord] = 1;
        }
    }

    let filteredWords = Object.entries(repeatingWords).filter(
        (a) => a[1] % 2 !== 0
    );

    filteredWords.sort((a, b) => b[1] - a[1]);

    let printArray = [];

    filteredWords.forEach((entry) => {
        printArray.push(entry[0]);
    });

    console.log(printArray.join(" "));
}

oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
