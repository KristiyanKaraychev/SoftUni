function revealWords(str1, str2) {
    let words = str1.split(", ");

    for (let word of words) {
        let stars = "*".repeat(word.length);
        str2 = str2.replace(stars, word);
    }

    console.log(str2);
}

revealWords(
    "great, learning",
    "softuni is ***** place for ******** new programming languages"
);
