function solve() {
    document.querySelector("#searchBtn").addEventListener("click", onClick);

    function onClick() {
        //   TODO:;

        let searchElement = document.getElementById("searchField").value;
        let tableElement = document.querySelectorAll("tbody td");

        for (const el of tableElement) {
            el.parentElement.classList.remove("select");
        }

        for (const el of tableElement) {
            if (!!searchElement && el.innerHTML.includes(searchElement)) {
                el.parentElement.classList.add("select");
            }
        }

        console.log("clicked");
    }
}
