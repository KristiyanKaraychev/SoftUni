function solve() {
    console.log("//TODO");

    let taskNameRef = document.querySelector("#task");
    let taskDescriptionRef = document.querySelector("#description");
    let taskDueDateRef = document.querySelector("#date");
    let addButtonRef = document.querySelector("#add");

    let openTaskRef =
        document.querySelector(".orange").parentElement.parentElement
            .children[1];

    addButtonRef.addEventListener("click", function (event) {
        event.preventDefault();
        //debugger;
        if (
            !!taskNameRef.value &&
            !!taskDescriptionRef.value &&
            !!taskDueDateRef.value
        ) {
            let newArticle = document.createElement("article");

            let newHeader = document.createElement("h3");
            newHeader.textContent = taskNameRef.value;

            let newPDescription = document.createElement("p");
            newPDescription.textContent =
                "Description: " + taskDescriptionRef.value;

            let newPDueDate = document.createElement("p");
            newPDueDate.textContent = "Due Date: " + taskDueDateRef.value;

            let newDivButtons = document.createElement("div");
            newDivButtons.classList.add("flex");

            let newButtonStart = document.createElement("button");
            newButtonStart.classList.add("green");
            newButtonStart.textContent = "Start";
            newButtonStart.addEventListener("click", (event) =>
                move(event, "yellow")
            );

            let newButtonDelete = document.createElement("button");
            newButtonDelete.classList.add("red");
            newButtonDelete.textContent = "Delete";
            newButtonDelete.addEventListener("click", (event) => del(event));

            newDivButtons.append(newButtonStart, newButtonDelete);
            newArticle.append(
                newHeader,
                newPDescription,
                newPDueDate,
                newDivButtons
            );
            openTaskRef.append(newArticle);
        }
    });

    function del(event) {
        let currentForm = event.currentTarget.parentElement.parentElement;
        currentForm.remove();
    }

    function move(event, color) {
        let currentForm = event.currentTarget.parentElement.parentElement;

        if (color == "yellow") {
            let parentDiv = event.currentTarget.parentElement;
            let startButton = parentDiv.children[0];
            let deleteButton = parentDiv.children[1];

            startButton.classList.replace("green", "red");
            startButton.textContent = "Delete";
            startButton.removeEventListener("click", (event) =>
                move(event, "yellow")
            );
            startButton.addEventListener("click", (event) => del(event));

            deleteButton.classList.replace("red", "orange");
            deleteButton.textContent = "Finish";
            deleteButton.removeEventListener("click", (event) => del(event));
            deleteButton.addEventListener("click", (event) => finish(event));
        }

        let nextSectionRef = document.querySelector(`.${color}`).parentElement
            .parentElement.children[1];
        nextSectionRef.appendChild(currentForm);
    }

    function finish(event) {
        let section =
            document.querySelector("h1.green").parentElement.parentElement
                .children[1];
        let currentForm = event.currentTarget.parentElement.parentElement;

        currentForm.removeChild(event.currentTarget.parentElement);
        section.appendChild(currentForm);
    }
}
