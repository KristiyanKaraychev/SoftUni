function solution() {
    const mainEl = document.getElementById("main");
    const BASE_URL = "http://localhost:3030/jsonstore/advanced/articles/";

    getArticles(`${BASE_URL}`);

    function getArticles(url) {
        fetch(`${url}list`)
            .then((res) => res.json())
            .then((articles) => {
                articles.forEach((article) => {
                    let id = article._id;
                    let title = article.title;

                    fetch(`${BASE_URL}details/${id}`)
                        .then((res) => res.json())
                        .then((data) => {
                            content = data.content;

                            let newArticle = createArticle(id, title, content);
                            mainEl.appendChild(newArticle);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function createArticle(id, title, content) {
        let accordionDiv = document.createElement("div");
        accordionDiv.classList.add("accordion");

        let headDiv = document.createElement("div");
        headDiv.classList.add("head");

        let headDivSpan = document.createElement("span");
        headDivSpan.textContent = title;

        let headDivButton = document.createElement("button");
        headDivButton.classList.add("button");
        headDivButton.setAttribute("id", id);
        headDivButton.textContent = "More";

        headDivButton.addEventListener("click", function () {
            if (headDivButton.textContent == "More") {
                extraDiv.style.display = "block";
                headDivButton.textContent = "Less";
            } else if (headDivButton.textContent == "Less") {
                extraDiv.style.display = "none";
                headDivButton.textContent = "More";
            }
        });

        headDiv.appendChild(headDivSpan);
        headDiv.appendChild(headDivButton);

        let extraDiv = document.createElement("div");
        extraDiv.classList.add("extra");

        let extraDivPEl = document.createElement("p");
        extraDivPEl.textContent = content;

        extraDiv.appendChild(extraDivPEl);

        accordionDiv.appendChild(headDiv);
        accordionDiv.appendChild(extraDiv);

        return accordionDiv;
    }
}

solution();
