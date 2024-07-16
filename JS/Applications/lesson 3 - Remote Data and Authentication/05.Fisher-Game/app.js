console.log("TODO:// Implement Home functionality");

const URL = "http://localhost:3030/users";
const URL_DATA = "http://localhost:3030/data";
const logoutButton = document.getElementById("logout");
const loadButton = document.querySelector("button.load");
const addFormEl = document.querySelector("form#addForm");
const navUserEl = document.querySelector("div#user");
const navGuestEl = document.querySelector("div#guest");

const catchesEl = document.getElementById("catches");

let userData = JSON.parse(sessionStorage.getItem("userData"));

logoutButton.disabled = true;
let token = undefined;

if (!!userData) {
    token = userData.accessToken;
    addFormEl.querySelector("button").disabled = false;
    logoutButton.disabled = false;
    navUserEl.style.display = "inline-block";
    navGuestEl.style.display = "none";
} else {
    navUserEl.style.display = "none";
    navGuestEl.style.display = "inline-block";
}

logoutButton.addEventListener("click", logout);
loadButton.addEventListener("click", loadCatches);
addFormEl.addEventListener("submit", addCatch);

catchesEl.replaceChildren();

function logout(e) {
    userData = JSON.parse(sessionStorage.getItem("userData"));

    if (!!userData) {
        logoutButton.disabled = false;
    } else {
        return;
    }

    userData = JSON.parse(sessionStorage.getItem("userData"));
    let token = userData.accessToken;

    let options = {
        method: "GET",
        headers: {
            "X-Authorization": token,
        },
    };

    fetch(`${URL}/logout`, options)
        .then((res) => {
            // if (!res.ok) {
            //     throw new Error(`Error: ${res.status}`);
            // }
            return res;
        })
        .then((data) => {
            console.log("logged out");
            sessionStorage.clear();
            window.location = "index.html";
        })
        .catch((err) => console.error(err));
}

function loadCatches() {
    fetch(`${URL_DATA}/catches`)
        .then((res) => res.json())
        .then((data) => {
            catchesEl.replaceChildren();

            console.log(data);

            if (!Array.isArray(data)) {
                createCatch(data);
            } else {
                Object.entries(data).forEach((e) => {
                    let data = e[1];
                    createCatch(data);
                });
            }
        });
}

function createCatch(data) {
    let noOwner = true;

    if (!!userData && userData._id === data._ownerId) {
        noOwner = false;
    }

    let newDiv = document.createElement("div");
    newDiv.classList.add("catch");
    newDiv.innerHTML =
        `<label>Angler</label>` +
        `<input type="text" class="angler" value="${data.angler}" />` +
        `<label>Weight</label>` +
        `<input type="text" class="weight" value="${data.weight}" />` +
        `<label>Species</label>` +
        `<input type="text" class="species" value="${data.species}" />` +
        `<label>Location</label>` +
        `<input type="text" class="location" value="${data.location}" />` +
        `<label>Bait</label>` +
        `<input type="text" class="bait" value="${data.bait}" />` +
        `<label>Capture Time</label>` +
        `<input type="number" class="captureTime" value="${data.captureTime}" />` +
        `<button class="update" data-id="${data._id}">Update</button>` +
        `<button class="delete" data-id="${data._id}">Delete</button>`;

    let updateButton = newDiv.querySelector("button.update");
    let deleteButton = newDiv.querySelector("button.delete");

    updateButton.addEventListener("click", updateCatch);
    deleteButton.addEventListener("click", deleteCatch);

    updateButton.classList.add("disabled");
    deleteButton.classList.add("disabled");

    updateButton.disabled = noOwner;
    deleteButton.disabled = noOwner;

    catchesEl.append(newDiv);
    return;
}

function updateCatch(e) {
    let currentCatchElement = e.currentTarget.parentElement;

    let angler = currentCatchElement.querySelector("input.angler").value;
    let weight = currentCatchElement.querySelector("input.weight").value;
    let species = currentCatchElement.querySelector("input.species").value;
    let location = currentCatchElement.querySelector("input.location").value;
    let bait = currentCatchElement.querySelector("input.bait").value;
    let captureTime =
        currentCatchElement.querySelector("input.captureTime").value;

    let currentId = currentCatchElement
        .querySelector("button.update")
        .getAttribute("data-id");

    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({
            angler,
            weight,
            species,
            location,
            bait,
            captureTime,
        }),
    };

    fetch(`${URL_DATA}/catches/${currentId}`, options)
        .then((res) => res.json())
        .then((data) => {
            console.log("catch updated");
            loadCatches();
        })
        .catch((err) => console.error(err));
}

function deleteCatch(e) {
    let currentCatchElement = e.currentTarget.parentElement;
    let currentId = currentCatchElement
        .querySelector("button.update")
        .getAttribute("data-id");

    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
        },
    };

    fetch(`${URL_DATA}/catches/${currentId}`, options)
        .then((res) => res.json())
        .then((data) => {
            console.log("catch deleted");
            loadCatches();
        })
        .catch((err) => console.error(err));
}

function addCatch(e) {
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);

    let angler = formData.get("angler");
    let weight = formData.get("weight");
    let species = formData.get("species");
    let location = formData.get("location");
    let bait = formData.get("bait");
    let captureTime = formData.get("captureTime");

    saveAddedCatch(angler, weight, species, location, bait, captureTime);

    form.reset();
}

function saveAddedCatch(angler, weight, species, location, bait, captureTime) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({
            angler,
            weight,
            species,
            location,
            bait,
            captureTime,
        }),
    };

    fetch(`${URL_DATA}/catches`, options)
        .then((res) => res.json())
        .then((data) => {
            console.log("added new catch");
            loadCatches();
        })
        .catch((err) => console.error(err));
}
