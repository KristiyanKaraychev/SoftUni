function solve() {
    //TODO
    console.log("clicked");
    let textElement = document.getElementById("input").value;
    let sentenceArr = textElement.split(".");
    let filteredArr = sentenceArr.filter(
        (element) => element.length >= 1 && element != "\n"
    );

    let counter = 0;
    let output = "";

    for (const sentence of filteredArr) {
        if (counter == 0) {
            output += "<p>";
        }

        output += sentence + ".";
        counter++;
        if (counter == 3) {
            output += "</p>";
            counter = 0;
        }
    }

    if (counter != 0) {
        output += "</p>";
    }

    document.getElementById("output").innerHTML = output;
}
