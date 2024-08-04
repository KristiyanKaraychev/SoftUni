import { html, render } from "../node_modules/lit-html/lit-html.js";

const URL = "http://localhost:3030/jsonstore/collections/books";

export { loadBooks, hideForm, showForm };

function loadBooks() {
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            const libraryBodyElement = document.querySelector("table tbody");

            render(
                bookTemplateFunction(Object.values(data)),
                libraryBodyElement
            );
        })
        .catch((err) => console.error(err));
}

let bookTemplateFunction = (data) => html`
    ${data.map((e) => {
        return html`<tr>
            <td>${e.title}</td>
            <td>${e.author}</td>
            <td>
                <button data-id=${e._id} @click=${onEdit}>Edit</button>
                <button data-id=${e._id} @click=${onDelete}>Delete</button>
            </td>
        </tr>`;
    })}
`;

function onEdit(e) {
    const editFormElement = document.getElementById("edit-form");
    const addFormElement = document.getElementById("add-form");
    showForm(editFormElement);
    hideForm(addFormElement);

    let id = e.currentTarget.getAttribute("data-id");
    let editForm = document.getElementById("edit-form");
    let authorInput = editForm.querySelector('input[name="author"]');
    let titleInput = editForm.querySelector('input[name="title"]');

    fetch(`${URL}/${id}`)
        .then((res) => res.json())
        .then((data) => {
            authorInput.value = data.author;
            titleInput.value = data.title;

            editForm.setAttribute("data-id", id);
        })
        .catch((err) => console.error(err));
}

function onDelete(e) {
    let currentElement = e.currentTarget;
    let id = currentElement.getAttribute("data-id");

    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    fetch(`${URL}/${id}`, options)
        .then((res) => res.json())
        .then(() => loadBooks())
        .catch((err) => console.log(err));
}

function hideForm(form) {
    form.style.display = "none";
}

function showForm(form) {
    form.style.display = "block";
}
