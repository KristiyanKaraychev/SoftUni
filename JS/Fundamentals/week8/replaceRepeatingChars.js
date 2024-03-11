function replaceRepeatingChars(input) {
    let newStr = "";

    for (let i = 1; i <= input.length; i++) {
        if (input[i] !== input[i - 1]) {
            newStr += input[i - 1];
        }
    }

    console.log(newStr);
}

replaceRepeatingChars("qqqwerqwecccwd");
