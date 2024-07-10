function lockedProfile() {
    const BASE_URL = "http://localhost:3030/jsonstore/advanced/profiles";
    const mainEl = document.getElementById("main");

    mainEl.replaceChildren();

    fetch(BASE_URL)
        .then((res) => res.json())
        .then((profiles) => {
            let counter = 0;

            for (const profile in profiles) {
                let data = profiles[profile];
                let username = data.username;
                let email = data.email;
                let age = data.age;
                counter++;

                let newUser = createUser(username, email, age, counter);
                mainEl.appendChild(newUser);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

function createUser(username, email, age, counter) {
    let divProfile = document.createElement("div");
    divProfile.classList.add("profile");

    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", "./iconProfile2.png");
    imgEl.setAttribute("class", "userIcon");

    let labelLockEl = document.createElement("label");
    labelLockEl.textContent = "Lock";

    let inputLockEl = document.createElement("input");
    inputLockEl.setAttribute("type", "radio");
    inputLockEl.setAttribute("name", `user${counter}Locked`);
    inputLockEl.setAttribute("value", "lock");
    inputLockEl.checked = true;

    let labelUnlockEl = document.createElement("label");
    labelUnlockEl.textContent = "Unlock";

    let inputUnlockEl = document.createElement("input");
    inputUnlockEl.setAttribute("type", "radio");
    inputUnlockEl.setAttribute("name", `user${counter}Locked`);
    inputUnlockEl.setAttribute("value", "unlock");

    let hrEl = document.createElement("hr");

    let usernameLabelEl = document.createElement("label");
    usernameLabelEl.textContent = "Username";

    let usernameInputEl = document.createElement("input");
    usernameInputEl.setAttribute("type", "text");
    usernameInputEl.setAttribute("name", `user${counter}Username`);
    usernameInputEl.setAttribute("value", username);
    usernameInputEl.disabled = true;
    usernameInputEl.readOnly = true;

    let divUser1El = document.createElement("div");
    divUser1El.setAttribute("id", `user${counter}HiddenFields`);

    let divUser1HrEl = document.createElement("hr");

    let divUser1LabelEmailEl = document.createElement("label");
    divUser1LabelEmailEl.textContent = "Email:";

    let divUser1EmailInputEl = document.createElement("input");
    divUser1EmailInputEl.setAttribute("type", "email");
    divUser1EmailInputEl.setAttribute("name", `user${counter}Email`);
    divUser1EmailInputEl.setAttribute("value", email);
    divUser1EmailInputEl.disabled = true;
    divUser1EmailInputEl.readOnly = true;

    let divUser1LabelAgeEl = document.createElement("label");
    divUser1LabelAgeEl.textContent = "Age:";

    let divUser1AgeInputEl = document.createElement("input");
    divUser1AgeInputEl.setAttribute("type", "email");
    divUser1AgeInputEl.setAttribute("name", `user${counter}Age`);
    divUser1AgeInputEl.setAttribute("value", age);
    divUser1AgeInputEl.disabled = true;
    divUser1AgeInputEl.readOnly = true;

    divUser1El.appendChild(divUser1HrEl);
    divUser1El.appendChild(divUser1LabelEmailEl);
    divUser1El.appendChild(divUser1EmailInputEl);
    divUser1El.appendChild(divUser1LabelAgeEl);
    divUser1El.appendChild(divUser1AgeInputEl);
    divUser1El.style.display = "none";

    let buttonEl = document.createElement("button");
    buttonEl.textContent = "Show more";
    buttonEl.addEventListener("click", function (e) {
        if (inputLockEl.checked == false) {
            if (buttonEl.textContent == "Show more") {
                divUser1El.style.display = "block";
                inputLockEl.checked = true;
                buttonEl.textContent = "Hide it";
            } else if (buttonEl.textContent == "Hide it") {
                divUser1El.style.display = "none";
                inputUnlockEl.checked = false;
                buttonEl.textContent = "Show more";
            }
        }
    });

    divProfile.appendChild(imgEl);
    divProfile.appendChild(labelLockEl);
    divProfile.appendChild(inputLockEl);
    divProfile.appendChild(labelUnlockEl);
    divProfile.appendChild(inputUnlockEl);
    divProfile.appendChild(hrEl);
    divProfile.appendChild(usernameLabelEl);
    divProfile.appendChild(usernameInputEl);
    divProfile.appendChild(divUser1El);
    divProfile.appendChild(buttonEl);

    return divProfile;
}
