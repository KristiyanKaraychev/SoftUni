import { render } from "./node_modules/lit-html/lit-html.js";
import dropDownTemplate from "./templates/dropDownTemplate.js";

const URL = "http://localhost:3030/jsonstore/advanced/dropdown";
const menuElement = document.getElementById("menu");
const formElement = document.querySelector("form");

formElement.addEventListener("submit", addItem);

loadData();

function addItem(e) {
    e.preventDefault();

    let currentForm = e.currentTarget;
    let inputElement = currentForm.querySelector("#itemText");
    let text = inputElement.value;

    if (!text) {
        return;
    }

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text,
        }),
    };

    fetch(URL, options)
        .then((res) => res.json())
        .then(() => loadData())
        .catch((err) => console.error(err));

    currentForm.reset();
}

function loadData() {
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            render(dropDownTemplate(Object.values(data)), menuElement);
        })
        .catch((err) => console.error(err));
}
