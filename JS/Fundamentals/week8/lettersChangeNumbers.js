function lettersChangeNumbers(input) {
    let words = input.split(" ").filter((a) => a !== "");
    let sum = 0;

    for (let word of words) {
        let num = Number(word.slice(1, word.length - 1));
        let charBefore = word[0];
        let charAfter = word[word.length - 1];
        let charBeforePosition = charBefore.toUpperCase().charCodeAt(0) - 64;
        let charAfterPosition = charAfter.toUpperCase().charCodeAt(0) - 64;

        if (charBefore === charBefore.toUpperCase()) {
            num = num / charBeforePosition;
        } else {
            num = num * charBeforePosition;
        }

        if (charAfter === charAfter.toUpperCase()) {
            num = num - charAfterPosition;
        } else {
            num = num + charAfterPosition;
        }

        sum += num;
    }

    console.log(sum.toFixed(2));
}

lettersChangeNumbers("P34562Z q2576f   H456z");
