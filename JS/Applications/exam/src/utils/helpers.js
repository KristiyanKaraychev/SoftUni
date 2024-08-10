export function formValidationHelper(data) {
    let invalidInput = false;

    for (const [key, value] of Object.entries(data)) {
        if (!value) {
            alert("Please fill in all mandatory fields");
            invalidInput = true;
            return true;
        }
    }

    return invalidInput;
}
