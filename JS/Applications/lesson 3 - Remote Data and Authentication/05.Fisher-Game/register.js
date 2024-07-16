console.log("TODO:// Implement Register functionality");

const URL = "http://localhost:3030/users/register";
const registerFormEl = document.querySelector("form#register");

const navUserEl = document.querySelector("div#user");
const navGuestEl = document.querySelector("div#guest");
let userData = JSON.parse(sessionStorage.getItem("userData"));

if (!!userData) {
    navUserEl.style.display = "inline-block";
    navGuestEl.style.display = "none";
} else {
    navUserEl.style.display = "none";
    navGuestEl.style.display = "inline-block";
}

registerFormEl.addEventListener("submit", register);

function register(e) {
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);

    let email = formData.get("email");
    let password = formData.get("password");
    let rePass = formData.get("rePass");

    if (!email || !password || rePass !== password) {
        console.error("Error");
        return;
    }

    createUser(email, password);
}

function createUser(email, password) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    };

    fetch(URL, options)
        .then((res) => res.json())
        .then((data) => {
            sessionStorage.setItem("userData", JSON.stringify(data));
            console.log("registered");
            window.location = "index.html";
        })
        .catch((err) => console.error(err));
}
