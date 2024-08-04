import { html, render } from "../node_modules/lit-html/lit-html.js";
import { loadBooks, hideForm, showForm } from "./bookEntryTemplate.js";

const URL = "http://localhost:3030/jsonstore/collections/books";

export default () => html`
    <button id="loadBooks" @click=${loadBooks}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <form id="add-form" @submit=${onSubmit}>
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." />
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." />
        <input type="submit" value="Submit" />
    </form>

    <form id="edit-form" @submit=${onSubmitEdit}>
        <input type="hidden" name="id" />
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." />
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." />
        <input type="submit" value="Save" />
    </form>
`;

function onSubmit(e) {
    e.preventDefault();

    let currentForm = e.currentTarget;
    let formData = new FormData(currentForm);

    let author = formData.get("author");
    let title = formData.get("title");

    if (!author || !title) {
        return;
    }

    saveBook(author, title);

    currentForm.reset();
}

function saveBook(author, title) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            author,
            title,
        }),
    };

    fetch(URL, options)
        .then((res) => res.json())
        .then(() => loadBooks())
        .catch((err) => console.log(err));
}

function onSubmitEdit(e) {
    e.preventDefault();

    let currentForm = e.currentTarget;
    let formData = new FormData(currentForm);

    let author = formData.get("author");
    let title = formData.get("title");
    let id = currentForm.getAttribute("data-id");

    if (!author || !title) {
        return;
    }

    updateBook(id, author, title);

    currentForm.reset();
}

function updateBook(id, author, title) {
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            author,
            title,
            _id: id,
        }),
    };

    fetch(`${URL}/${id}`, options)
        .then((res) => res.json())
        .then(() => {
            const editFormElement = document.getElementById("edit-form");
            const addFormElement = document.getElementById("add-form");
            showForm(addFormElement);
            hideForm(editFormElement);
            loadBooks();
        })
        .catch((err) => console.log(err));
}
