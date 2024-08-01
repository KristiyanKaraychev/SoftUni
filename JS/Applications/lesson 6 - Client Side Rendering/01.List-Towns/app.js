import { html, render } from "./node_modules/lit-html/lit-html.js";
import townListTemplate from "./templates/townListTemplate.js";

const buttonElement = document.getElementById("btnLoadTowns");
const inputElement = document.getElementById("towns");
const rootElement = document.getElementById("root");

buttonElement.addEventListener("click", loadTemplate);

function loadTemplate(e) {
    e.preventDefault();
    let towns = inputElement.value.split(",");
    let townsTemplate = townListTemplate(towns);
    render(townsTemplate, rootElement);
}
