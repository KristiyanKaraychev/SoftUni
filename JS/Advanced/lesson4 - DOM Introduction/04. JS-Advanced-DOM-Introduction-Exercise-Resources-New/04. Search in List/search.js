function search() {
    // TODO
    let searchElement = document.getElementById("searchText").value;
    let townsElement = document.querySelectorAll("#towns li");

    console.log(searchElement);
    console.log(townsElement);

    let matches = 0;

    for (const town of townsElement) {
        if (!!searchElement && town.innerHTML.includes(searchElement)) {
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline";
            matches++;
        } else {
            town.style.fontWeight = "";
            town.style.textDecoration = "";
        }
    }

    document.getElementById("result").textContent = `${matches} matches found`;

    console.log("searched");
}
