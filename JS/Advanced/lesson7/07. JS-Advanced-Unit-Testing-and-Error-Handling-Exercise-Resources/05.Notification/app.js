function notify(message) {
    console.log("todo");
    // TODO:
    let divReference = document.getElementById("notification");
    divReference.textContent = message;
    divReference.style.display = "block";

    divReference.addEventListener("click", function (e) {
        this.style.display = "none";
    });
}
