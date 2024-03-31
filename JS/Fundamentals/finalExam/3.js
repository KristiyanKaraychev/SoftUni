function thirdProblem(input) {
    let word_def = input.shift().split(" | ");
    let dictionary = {};
    let counter = 0;

    for (let entry of word_def) {
        let word = entry.split(": ")[0];
        let definition = entry.split(": ")[1];

        if (dictionary.hasOwnProperty(word)) {
            dictionary[word].push(definition);
        } else {
            dictionary[word] = [definition];
        }
    }

    let testWords = input.shift().split(" | ");

    if (input[counter] === "Test") {
        for (let word of testWords) {
            if (dictionary.hasOwnProperty(word)) {
                console.log(`${word}:`);
                for (let [key, value] of Object.entries(dictionary[word])) {
                    console.log(` -${value}`);
                }
            }
        }
    } else if (input[counter] === "Hand Over") {
        let definedWords = [];

        for (const key in dictionary) {
            definedWords.push(key);
        }

        console.log(definedWords.join(" "));
    }
}

thirdProblem([
    "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test",
]);
