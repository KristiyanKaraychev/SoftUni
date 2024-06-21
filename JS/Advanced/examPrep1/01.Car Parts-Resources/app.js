window.addEventListener("load", solve);

function solve() {
    //TODO
    let carModelRef = document.getElementById("car-model");
    let carYearRef = document.getElementById("car-year");
    let partNameRef = document.getElementById("part-name");
    let partNumberRef = document.getElementById("part-number");
    let conditionRef = document.getElementById("condition");

    let refs = [
        carModelRef,
        carYearRef,
        partNameRef,
        partNumberRef,
        conditionRef,
    ];

    let nextButtonRef = document.getElementById("next-btn");

    nextButtonRef.addEventListener("click", function (e) {
        //debugger;

        e.preventDefault();

        let isValid = true;

        refs.forEach((element) => {
            if (element.id == "car-year") {
                if (
                    Number(element.value) < 1980 ||
                    Number(element.value) > 2023
                ) {
                    isValid = false;
                }
            } else {
                if (
                    typeof element.value !== "string" ||
                    element.value.length < 1
                ) {
                    isValid = false;
                }
            }
        });

        if (isValid) {
            //debugger;

            let tempCarModel = carModelRef.value;
            let tempCarYear = carYearRef.value;
            let tempPartName = partNameRef.value;
            let tempPartNumber = partNumberRef.value;
            let tempCondition = conditionRef.value;

            let infoListRef = document.querySelector(".info-list");

            let pCarModel = document.createElement("p");
            pCarModel.textContent = `Car Model: ${carModelRef.value}`;

            let pCarYear = document.createElement("p");
            pCarYear.textContent = `Car Year: ${carYearRef.value}`;

            let pPartName = document.createElement("p");
            pPartName.textContent = `Part Name: ${partNameRef.value}`;

            let pPartNumber = document.createElement("p");
            pPartNumber.textContent = `Part Number: ${partNumberRef.value}`;

            let pCondition = document.createElement("p");
            pCondition.textContent = `Condition: ${conditionRef.value}`;

            let articleElement = document.createElement("article");
            articleElement.appendChild(pCarModel);
            articleElement.appendChild(pCarYear);
            articleElement.appendChild(pPartName);
            articleElement.appendChild(pPartNumber);
            articleElement.appendChild(pCondition);

            let buttonEdit = document.createElement("button");
            buttonEdit.classList.add("edit-btn");
            buttonEdit.textContent = "Edit";
            buttonEdit.addEventListener("click", function () {
                debugger;
                carModelRef.value = tempCarModel;
                carYearRef.value = tempCarYear;
                partNameRef.value = tempPartName;
                partNumberRef.value = tempPartNumber;
                conditionRef.value = tempCondition;

                nextButtonRef.disabled = false;
                liPartContent.remove();
            });

            let buttonContinue = document.createElement("button");
            buttonContinue.classList.add("continue-btn");
            buttonContinue.textContent = "Continue";
            buttonContinue.addEventListener("click", function () {
                buttonEdit.remove();
                let buttonConfirm = document.createElement("button");
                buttonConfirm.classList.add("confirm-btn");
                buttonConfirm.textContent = "Confirm";
                buttonConfirm.addEventListener("click", function () {
                    liPartContent.remove();
                    nextButtonRef.disabled = false;
                    completeImgRef.style.visibility = "visible";
                    completeTextRef.textContent = "Part is Ordered!";
                });

                liPartContent.appendChild(buttonConfirm);

                buttonContinue.remove();

                let buttonCancel = document.createElement("button");
                buttonCancel.classList.add("cancel-btn");
                buttonCancel.textContent = "Cancel";
                buttonCancel.addEventListener("click", function () {
                    liPartContent.remove();
                    nextButtonRef.disabled = false;
                });

                liPartContent.appendChild(buttonCancel);

                let confirmListRef = document.querySelector(".confirm-list");
                confirmListRef.appendChild(liPartContent);
            });

            let liPartContent = document.createElement("li");
            liPartContent.classList.add("part-content");

            liPartContent.appendChild(articleElement);
            liPartContent.appendChild(buttonEdit);
            liPartContent.appendChild(buttonContinue);

            infoListRef.appendChild(liPartContent);

            refs.forEach((element) => (element.value = ""));
            e.currentTarget.disabled = true;

            let completeImgRef = document.getElementById("complete-img");
            completeImgRef.style.visibility = "hidden";

            let completeTextRef = document.getElementById("complete-text");
            completeTextRef.textContent = "";
        }
    });
}
