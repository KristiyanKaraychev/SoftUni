function addItem() {
    console.log("TODO:...");
    //debugger;

    let itemTextBox = document.getElementById("newItemText");
    let itemValueBox = document.getElementById("newItemValue");
    let menu = document.getElementById("menu");

    let newOption = document.createElement("option");
    newOption.textContent = itemTextBox.value;
    newOption.value = itemValueBox.value;

    menu.append(newOption);

    itemTextBox.value = "";
    itemValueBox.value = "";
}
