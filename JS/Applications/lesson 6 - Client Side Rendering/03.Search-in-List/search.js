import { render } from "./node_modules/lit-html/lit-html.js";
import townsTemplate from "./templates/townsTemplate.js";
import { towns } from "./towns.js";

const townsDivElement = document.getElementById("towns");
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", search);

render(townsTemplate(towns), townsDivElement);

function search(e) {
    // TODO
    let inputElement = e.currentTarget.parentElement.querySelector("input");
    let inputText = inputElement.value;

    render(townsTemplate(towns, inputText), townsDivElement);
}
