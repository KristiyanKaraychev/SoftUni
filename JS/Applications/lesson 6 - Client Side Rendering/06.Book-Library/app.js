console.log("My requests...");

import { render } from "./node_modules/lit-html/lit-html.js";
import libraryTemplate from "./templates/libraryTemplate.js";
import { hideForm } from "./templates/bookEntryTemplate.js";

loadLibrary();

const loadBooksButtonElement = document.getElementById("loadBooks");

loadBooksButtonElement.addEventListener("click", loadBooks);

function loadLibrary() {
    render(libraryTemplate(), document.body);

    const editFormElement = document.getElementById("edit-form");
    hideForm(editFormElement);
}
