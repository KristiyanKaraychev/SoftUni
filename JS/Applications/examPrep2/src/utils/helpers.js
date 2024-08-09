export function formValidationHelper(data) {
    let invalidInput = false;

    for (const [key, value] of Object.entries(data)) {
        if (!value) {
            alert("Please fill in all mandatory fields");
            invalidInput = true;
            return true;
        }
    }

    // if (data.make.length < 4) {
    //     alert("make needs to be at least 4 characters long");
    //     invalidInput = true;
    //     //change class
    // }

    // if (data.model.length < 4) {
    //     alert("model needs to be at least 4 characters long");
    //     invalidInput = true;
    //     //change class
    // }

    // if (data.year < 1950 || data.year > 2050) {
    //     alert("year needs to be at from 1950 to 2050");
    //     invalidInput = true;
    //     //change class
    // }

    // if (data.description.length < 10) {
    //     alert("make needs to be at least 10 characters long");
    //     invalidInput = true;
    //     //change class
    // }

    // if (data.price < 0) {
    //     alert("price needs to be a positive number");
    //     invalidInput = true;
    //     //change class
    // }

    return invalidInput;
}
