function sortTwoCriteria(arr) {
    // arr.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join("\n"));
}

sortTwoCriteria(["Deny", "omen", "test", "Default"]);
