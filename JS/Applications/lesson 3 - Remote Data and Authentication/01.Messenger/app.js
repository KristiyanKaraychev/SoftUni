function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/messenger";
    const sendButtonEl = document.getElementById("submit");
    const refreshButtonEl = document.getElementById("refresh");
    const nameEl = document.querySelector("input[name='author']");
    const messageEl = document.querySelector("input[name='content']");
    const textAreaEl = document.getElementById("messages");

    sendButtonEl.addEventListener("click", () => {
        let author = nameEl.value;
        let content = messageEl.value;

        fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                author,
                content,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        nameEl.value = "";
        messageEl.value = "";
    });

    refreshButtonEl.addEventListener("click", () => {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                let msg = Object.entries(data)
                    .map((e) => `${e[1].author}: ${e[1].content}`)
                    .join("\n");

                textAreaEl.textContent = msg;
            })
            .catch((err) => console.log(err));
    });
}

attachEvents();
