function extractEmails(input) {
    let email_regex =
        /(?<=\s|^)([A-Za-z0-9]+[\w\-\.]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g;

    let emails = input.match(email_regex);
    emails.forEach((email) => {
        console.log(email);
    });
}

extractEmails(
    "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de."
);
