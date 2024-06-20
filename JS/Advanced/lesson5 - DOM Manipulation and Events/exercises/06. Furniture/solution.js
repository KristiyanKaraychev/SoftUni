function solve() {
    //TODO...
    let textAreas = document.querySelectorAll("div textarea");
    let textAreaInput = textAreas[0];
    let textAreaOutput = textAreas[1];
    let buttons = document.querySelectorAll("div button");
    let buttonGenerate = buttons[0];
    let buttonBuy = buttons[1];
    let tableElement = document.querySelector("tbody");

    buttonGenerate.addEventListener("click", () => {
        let arr = JSON.parse(textAreaInput.value);

        for (const obj of arr) {
            let newRow = createTableRow(obj);
            tableElement.append(newRow);
        }
    });

    buttonBuy.addEventListener("click", () => {
        let names = [];
        let totalPrice = 0;
        let totalFactor = 0;
        let factorAmount = 0;

        // debugger;
        let checkBoxesRef = document.querySelectorAll("td input");

        for (const checkbox of checkBoxesRef) {
            if (checkbox.checked) {
                let rowRef = checkbox.parentElement.parentElement;
                let [_, rowName, rowPrice, rowFactor] = rowRef.children;
                names.push(rowName.children[0].textContent);
                totalPrice += Number(rowPrice.children[0].textContent);
                totalFactor += Number(rowFactor.children[0].textContent);
                factorAmount++;
            }
        }

        totalPrice = totalPrice.toFixed(2);
        let averageFactor = totalFactor / factorAmount;

        let outputString = "";
        outputString += `Bought furniture: ${names.join(", ")}\n`;
        outputString += `Total price: ${totalPrice}\n`;
        outputString += `Average decoration factor: ${averageFactor}`;

        textAreaOutput.value = outputString;
    });

    function createTableRow(object) {
        let newRow = document.createElement("tr");

        newRow.innerHTML =
            `<td>` +
            `<img src = ${object.img}>` +
            `</td>` +
            `<td>` +
            `<p>${object.name}</p>` +
            `</td>` +
            `<td>` +
            `<p>${object.price}</p>` +
            `</td>` +
            `<td>` +
            `<p>${object.decFactor}</p>` +
            `</td>` +
            `<td>` +
            `<input type="checkbox" />` +
            `</td>`;

        return newRow;
    }
}
