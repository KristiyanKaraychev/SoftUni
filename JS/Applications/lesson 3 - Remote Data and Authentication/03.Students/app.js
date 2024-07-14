const BASE_URL = "http://localhost:3030/jsonstore/collections/students";

const resultsTableEl = document.querySelector("#results tbody");
const inputFirstNameEl = document.querySelector("input[name='firstName']");
const inputLastNameEl = document.querySelector("input[name='lastName']");
const inputFacultyNumEl = document.querySelector("input[name='facultyNumber']");
const inputGradeEl = document.querySelector("input[name='grade']");

const submitButtonEl = document.getElementById("submit");

extractStudents();

submitButtonEl.addEventListener("click", (e) => {
    e.preventDefault();

    let firstName = inputFirstNameEl.value;
    let lastName = inputLastNameEl.value;
    let facultyNumber = inputFacultyNumEl.value;
    let grade = inputGradeEl.value;

    if (
        typeof firstName == "string" &&
        firstName.length > 0 &&
        typeof lastName == "string" &&
        lastName.length > 0 &&
        typeof facultyNumber == "string" &&
        facultyNumber.length > 0 &&
        typeof grade == "string" &&
        grade.length > 0
    ) {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                facultyNumber,
                grade,
            }),
        };

        fetch(BASE_URL, options)
            .then((res) => res.json())
            .then((data) => {
                extractStudents();
            })
            .catch((err) => console.log(err));
    }

    inputFirstNameEl.value = "";
    inputLastNameEl.value = "";
    inputFacultyNumEl.value = "";
    inputGradeEl.value = "";
});

function extractStudents() {
    resultsTableEl.replaceChildren();

    fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
            Object.entries(data).forEach((e) => {
                let newTrEl = document.createElement("tr");
                let firstNameTdEl = document.createElement("td");
                firstNameTdEl.textContent = e[1].firstName;
                let lastNameTdEl = document.createElement("td");
                lastNameTdEl.textContent = e[1].lastName;
                let facultyNumTdEl = document.createElement("td");
                facultyNumTdEl.textContent = e[1].facultyNumber;
                let gradeTdEl = document.createElement("td");
                gradeTdEl.textContent = e[1].grade;

                newTrEl.append(
                    firstNameTdEl,
                    lastNameTdEl,
                    facultyNumTdEl,
                    gradeTdEl
                );
                resultsTableEl.append(newTrEl);
            });
        })
        .catch((err) => console.log(err));
}
