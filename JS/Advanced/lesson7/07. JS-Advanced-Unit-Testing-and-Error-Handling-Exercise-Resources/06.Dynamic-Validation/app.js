function validate() {
    // TODO
    let emailRef = document.getElementById("email");

    emailRef.addEventListener("change", function () {
        let emailRegex = /^(?<name>\w+)\@(?<domain>\w+)\.(?<extension>\w+)$/gm;
        let input = this.value;

        if (emailRegex.test(input)) {
            this.classList.remove("error");
        } else {
            this.classList.add("error");
        }
    });
}
