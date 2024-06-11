function getArticleGenerator(articles) {
    // TODO

    return function () {
        if (articles.length > 0) {
            let newArticle = document.createElement("article");
            newArticle.textContent = articles.shift();
            document.querySelector("#content").append(newArticle);
        }
    };
}
