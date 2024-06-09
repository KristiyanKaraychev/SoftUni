function create(words) {
    console.log("TODO:...");

    let mainDivElement = document.getElementById("content");

    for (const word of words) {
        let tempDiv = document.createElement("div");
        let tempParagraph = document.createElement("p");

        tempParagraph.textContent = word;
        tempParagraph.style.display = "none";

        tempDiv.appendChild(tempParagraph);
        tempDiv.addEventListener("click", onClick);

        mainDivElement.appendChild(tempDiv);
    }

    function onClick(event) {
        event.target.children[0].style.display = "block";
    }
}
