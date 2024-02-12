function passwordVal(password) {

    function checkLength(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkSymbols(string) {
        let regex = /^[A-Za-z0-9]+$/;
        if (regex.test(string)) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }

    function checkDigits(string) {
        let regex = /[0-9].*[0-9]/;
        if (regex.test(string)) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

    let valLength = checkLength(password);
    let valSymbols = checkSymbols(password);
    let valDigits = checkDigits(password);

    if (valLength && valSymbols && valDigits) {
        console.log("Password is valid");
    }

}

passwordVal('!');