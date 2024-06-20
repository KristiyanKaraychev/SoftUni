function validate() {
    // TODO
    let usernameRegex = /^[a-zA-Z0-9]{3,20}$/gm;
    let passwordRegex = /^\w{5,15}$/gm;
    let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/gm;

    let usernameInputRef = document.getElementById("username");
    let emailInputRef = document.getElementById("email");
    let passwordInputRef = document.getElementById("password");
    let confirmPasswordInputRef = document.getElementById("confirm-password");

    let companyCheckboxRef = document.getElementById("company");
    let companyInfoRef = document.getElementById("companyInfo");

    companyCheckboxRef.addEventListener("change", function () {
        let isChecked = companyCheckboxRef.checked;
        if (isChecked) {
            companyInfoRef.style.display = "block";
        } else {
            companyInfoRef.style.display = "none";
        }
    });

    let submitButtonRef = document.getElementById("submit");
    let validDivRef = document.getElementById("valid");

    submitButtonRef.addEventListener("click", function (event) {
        event.preventDefault();
        let isValid = true;

        //debugger;

        if (usernameRegex.test(usernameInputRef.value) == false) {
            usernameInputRef.style.borderColor = "red";
            isValid = false;
        } else {
            usernameInputRef.style.border = "none";
        }

        if (emailRegex.test(emailInputRef.value) == false) {
            emailInputRef.style.borderColor = "red";
            isValid = false;
        } else {
            emailInputRef.style.border = "none";
        }

        if (
            passwordRegex.test(passwordInputRef.value) == false ||
            confirmPasswordInputRef.value !== passwordInputRef.value
        ) {
            passwordInputRef.style.borderColor = "red";
            confirmPasswordInputRef.style.borderColor = "red";
            isValid = false;
        } else {
            passwordInputRef.style.border = "none";
            confirmPasswordInputRef.style.border = "none";
        }

        if (companyInfoRef.style.display == "block") {
            let companyInfoNumRef = companyInfoRef.children[1].children[1];

            if (
                Number(companyInfoNumRef.value) < 1000 ||
                Number(companyInfoNumRef.value) > 9999
            ) {
                companyInfoNumRef.style.borderColor = "red";
                isValid = false;
            } else {
                companyInfoNumRef.style.border = "none";
            }
        }

        if (isValid) {
            validDivRef.style.display = "block";
        } else {
            validDivRef.style.display = "none";
        }
    });
}
