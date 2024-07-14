function solution() {
    const URL = "http://localhost:3030/jsonstore/collections/books";

    const formEl = document.querySelector("form");
    const formHeaderEl = document.querySelector("form h3");
    const loadAllButtonEl = document.getElementById("loadBooks");
    const tableEl = document.querySelector("tbody");

    const inputAuthorEl = document.querySelector("input[name='author']");
    const inputTitleEl = document.querySelector("input[name='title']");

    let keyTemp = "";

    loadAllButtonEl.addEventListener("click", createTable);

    formEl.addEventListener("submit", submitForm);

    function submitForm(e) {
        debugger;

        e.preventDefault();
        let currentForm = e.currentTarget;
        let formData = new FormData(currentForm);

        let author = formData.get("author");
        let title = formData.get("title");

        let button = formEl.querySelector("button");

        if (button.textContent == "Submit") {
            createBook(author, title);
        }
        if (button.textContent == "Save") {
            saveEditedBook();
        }

        currentForm.reset();
    }

    function createBook(author, title) {
        debugger;

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

        fetch(URL, options).catch((err) => console.log(err));
    }

    function createTable() {
        debugger;

        tableEl.replaceChildren();

        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                Object.entries(data).forEach((e) => {
                    let author = e[1].author;
                    let title = e[1].title;
                    let key = e[0];

                    let trEl = document.createElement("tr");

                    let authorTdEl = document.createElement("td");
                    authorTdEl.textContent = author;
                    let titleTdEl = document.createElement("td");
                    titleTdEl.textContent = title;

                    let buttonsTdEl = document.createElement("td");

                    let editButton = document.createElement("button");
                    editButton.textContent = "Edit";
                    editButton.addEventListener("click", (e) => {
                        editBook(e, key);
                    });

                    let deleteButton = document.createElement("button");
                    deleteButton.textContent = "Delete";
                    deleteButton.addEventListener("click", (e) => {
                        deleteBook(e, key);
                    });

                    buttonsTdEl.append(editButton, deleteButton);
                    trEl.append(titleTdEl, authorTdEl, buttonsTdEl);
                    tableEl.append(trEl);
                });
            })
            .catch((err) => console.log(err));
    }

    function editBook(e, key) {
        debugger;

        e.preventDefault();

        let author =
            e.currentTarget.parentElement.previousElementSibling.textContent;
        let title =
            e.currentTarget.parentElement.previousElementSibling
                .previousElementSibling.textContent;

        formHeaderEl.textContent = "Edit FORM";

        inputAuthorEl.value = author;
        inputTitleEl.value = title;

        let button = formEl.querySelector("button");
        button.textContent = "Save";

        keyTemp = key;
    }

    function saveEditedBook(e) {
        // e.preventDefault();

        debugger;

        let formData = new FormData(formEl);
        let author = formData.get("author");
        let title = formData.get("title");

        let options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                author,
                title,
            }),
        };

        fetch(`${URL}/${keyTemp}`, options)
            .then((res) => res.json())
            .then((data) => {
                let button = formEl.querySelector("button");
                button.textContent = "Submit";

                formEl.removeEventListener("submit", () => {
                    saveEditedBook(key);
                });
                formEl.addEventListener("submit", submitForm);
            })
            .catch((err) => console.log(err));

        formEl.reset();
    }

    function deleteBook(e, key) {
        let options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch(`${URL}/${key}`, options)
            .then((res) => res.json())
            .then((data) => {})
            .catch((err) => console.log(err));

        let elToDelete = e.currentTarget.parentElement.parentElement;
        elToDelete.remove();
    }
}
solution();
