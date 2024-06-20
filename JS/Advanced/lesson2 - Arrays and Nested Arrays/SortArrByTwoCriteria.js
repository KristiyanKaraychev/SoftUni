function sortArr(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).forEach(
        (element) => console.log(element)
    );
}

sortArr(["test", "Deny", "omen", "Default"]);
