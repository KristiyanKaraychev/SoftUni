console.log("TODO:// Implement Login functionality");

const URL = "http://localhost:3030/users/login";
const loginFormEl = document.querySelector("form#login");
const logoutButton = document.getElementById("logout");

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

logoutButton.disabled = true;

loginFormEl.addEventListener("submit", login);

function login(e) {
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);
    let email = formData.get("email");
    let password = formData.get("password");

    loginUser(email, password);
}

function loginUser(email, password) {
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
        .then((res) => {
            // if (!res.ok) {
            //     debugger;
            //     throw new Error(`Error: ${res.status}`);
            // }
            return res.json();
        })
        .then((data) => {
            sessionStorage.setItem("userData", JSON.stringify(data));
            console.log("logged in");
            logoutButton.disabled = false;
            window.location = "index.html";
        })
        .catch((err) => console.error(err));
}
