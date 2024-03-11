function modernTimes(input) {
    let words = input.split(" ");
    let print = [];

    for (let word of words) {
        if (word.startsWith("#") && word.length > 1) {
            print.push(word.substring(1));
        }
    }

    let pattern = /\b[A-Za-z]+\b/;

    print.forEach((i) => {
        if (pattern.test(i)) {
            console.log(i);
        }
    });
}

modernTimes(
    "The symbol # is known #variousasdad1231ly in English-speaking #regions as the #number sign"
);
