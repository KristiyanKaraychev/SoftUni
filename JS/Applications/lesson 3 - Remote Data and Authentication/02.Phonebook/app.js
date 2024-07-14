function attachEvents() {
    const URL = "http://localhost:3030/jsonstore/phonebook";

    const inputPersonEl = document.getElementById("person");
    const inputPhoneEl = document.getElementById("phone");
    const ulPhonebookEl = document.getElementById("phonebook");

    const loadButtonEl = document.getElementById("btnLoad");
    const createButtonEl = document.getElementById("btnCreate");

    createButtonEl.addEventListener("click", () => {
        let person = inputPersonEl.value;
        let phone = inputPhoneEl.value;

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                person,
                phone,
            }),
        };

        fetch(URL, options)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        inputPersonEl.value = "";
        inputPhoneEl.value = "";
    });

    loadButtonEl.addEventListener("click", () => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                ulPhonebookEl.replaceChildren();

                Object.entries(data).forEach((e) => {
                    let key = e[1]._id;

                    let liEl = document.createElement("li");
                    liEl.textContent = `${e[1].person}: ${e[1].phone}`;

                    let deleteButton = document.createElement("button");
                    deleteButton.textContent = "Delete";
                    deleteButton.addEventListener("click", function (e) {
                        deleteContact(e, key);
                    });

                    liEl.append(deleteButton);
                    ulPhonebookEl.append(liEl);
                });
            })
            .catch((err) => console.log(err));
    });

    function deleteContact(e, key) {
        let options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch(`${URL}/${key}`, options)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        let elToDelete = e.currentTarget.parentElement;
        elToDelete.remove();
    }
}

attachEvents();
