function pascalCaseSplitter(input) {
    let word = "";
    let words = [];

    for (let i = 1; i < input.length; i++) {
        word += input[i - 1];
        if (input[i] !== input[i].toLowerCase()) {
            words.push(word);
            word = "";
        }
        if (i === input.length - 1) {
            word += input[i];
            words.push(word);
        }
    }

    console.log(words.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
