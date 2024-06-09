function lockedProfile() {
    console.log("TODO...");

    let buttons = document.querySelectorAll("button");

    for (const button of buttons) {
        button.addEventListener("click", (event) => {
            let current = event.currentTarget;
            let currentProfile = current.parentElement;
            let unlockedBox = currentProfile.querySelector(
                "input[value=unlock]"
            );
            let hiddenFields = currentProfile.querySelector("div");

            //debugger;

            if (unlockedBox.checked) {
                if (hiddenFields.style.display == "") {
                    hiddenFields.style.display = "block";
                    current.textContent = "Hide it";
                } else {
                    hiddenFields.style.display = "";
                    current.textContent = "Show more";
                }
            }
        });
    }
}
