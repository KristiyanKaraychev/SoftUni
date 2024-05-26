function solve() {
    let input = document.getElementById("text").value.toLowerCase().split(" ");
    let caseType = document.getElementById("naming-convention").value;

    let newInput = [];
    input = input.filter((n) => n);

    let output = "";

    if (caseType == "Camel Case") {
        for (let i = 0; i < input.length; i++) {
            if (i == 0) {
                newInput.push(input[i]);
            } else {
                let newEl = input[i][0].toUpperCase() + input[i].slice(1);
                newInput.push(newEl);
            }
        }
        output = newInput.join("");
    } else if (caseType == "Pascal Case") {
        for (const el of input) {
            let newEl = el[0].toUpperCase() + el.slice(1);
            newInput.push(newEl);
        }
        output = newInput.join("");
    } else {
        output = "Error!";
    }

    document.getElementById("result").textContent = output;
}
