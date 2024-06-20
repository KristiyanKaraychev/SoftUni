function toggle() {
    if (document.querySelector("#extra").style.display == "none") {
        document.querySelector("#extra").style.display = "block";
        document.getElementsByClassName("button")[0].textContent = "Less";
    } else {
        document.querySelector("#extra").style.display = "none";
        document.getElementsByClassName("button")[0].textContent = "More";
    }
}
