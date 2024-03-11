function stringSubstring(str1, str2) {
    let words = str2.split(" ");

    for (let word of words) {
        if (word.toLowerCase() === str1.toLowerCase()) {
            console.log(str1);
            return;
        }
    }

    console.log(`${str1} not found!`);
}

stringSubstring("python", "JavaScript is the best programming language");
