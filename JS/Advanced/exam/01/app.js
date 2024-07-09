window.addEventListener("load", solve);

function solve() {
    //TODO...
    let firstNameRef = document.getElementById("first-name");
    let lastNameRef = document.getElementById("last-name");
    let fromDateRef = document.getElementById("from-date");
    let toDateRef = document.getElementById("to-date");
    let nextButtonRef = document.getElementById("next-btn");
    let vacationInfoULRef = document.querySelector(".info-list");
    let vacationConfirmULRef = document.querySelector(".confirm-list");
    let h1StatusRef = document.getElementById("status");

    let refs = [firstNameRef, lastNameRef, fromDateRef, toDateRef];

    let fromDate = undefined;
    let toDate = undefined;

    nextButtonRef.addEventListener("click", function (e) {
        e.preventDefault();

        fromDate = new Date(fromDateRef.value);
        toDate = new Date(toDateRef.value);

        if (
            !firstNameRef.value ||
            !lastNameRef.value ||
            !fromDateRef.value ||
            !toDateRef.value ||
            fromDate.getTime() >= toDate.getTime()
        ) {
            return;
        }

        let tempFirstName = firstNameRef.value;
        let tempLastName = lastNameRef.value;
        let tempFromDate = fromDateRef.value;
        let tempToDate = toDateRef.value;

        let articleEl = document.createElement("article");

        let h3NameEl = document.createElement("h3");
        h3NameEl.textContent = `Name: ${firstNameRef.value} ${lastNameRef.value}`;

        let pFromDateEl = document.createElement("p");
        pFromDateEl.textContent = `From date: ${fromDateRef.value}`;

        let pToDateEl = document.createElement("p");
        pToDateEl.textContent = `To date: ${toDateRef.value}`;

        articleEl.appendChild(h3NameEl);
        articleEl.appendChild(pFromDateEl);
        articleEl.appendChild(pToDateEl);

        let buttonEditEl = document.createElement("button");
        buttonEditEl.classList.add("edit-btn");
        buttonEditEl.textContent = "Edit";
        buttonEditEl.addEventListener("click", function () {
            firstNameRef.value = tempFirstName;
            lastNameRef.value = tempLastName;
            fromDateRef.value = tempFromDate;
            toDateRef.value = tempToDate;

            nextButtonRef.disabled = false;
            liVacationContentEl.remove();
        });

        let buttonContinueEl = document.createElement("button");
        buttonContinueEl.classList.add("continue-btn");
        buttonContinueEl.textContent = "Continue";
        buttonContinueEl.textContent = "Continue";
        buttonContinueEl.addEventListener("click", function () {
            buttonEditEl.remove();
            let buttonConfirmEl = document.createElement("button");
            buttonConfirmEl.classList.add("confirm-btn");
            buttonConfirmEl.textContent = "Confirm";
            buttonConfirmEl.addEventListener("click", function () {
                liVacationContentEl.remove();
                nextButtonRef.disabled = false;
                h1StatusRef.classList.add("vacation-confirmed");
                h1StatusRef.textContent = "Vacation Requested";
            });

            buttonContinueEl.remove();
            let buttonCancelEl = document.createElement("button");
            buttonCancelEl.classList.add("cancel-btn");
            buttonCancelEl.textContent = "Cancel";
            buttonCancelEl.addEventListener("click", function () {
                liVacationContentEl.remove();
                nextButtonRef.disabled = false;
                h1StatusRef.classList.add("vacation-cancelled");
                h1StatusRef.textContent = "Cancelled Vacation";
            });

            liVacationContentEl.appendChild(buttonConfirmEl);
            liVacationContentEl.appendChild(buttonCancelEl);

            vacationConfirmULRef.appendChild(liVacationContentEl);
        });

        let liVacationContentEl = document.createElement("li");
        liVacationContentEl.classList.add("vacation-content");

        liVacationContentEl.appendChild(articleEl);
        liVacationContentEl.appendChild(buttonEditEl);
        liVacationContentEl.appendChild(buttonContinueEl);

        vacationInfoULRef.appendChild(liVacationContentEl);

        refs.forEach((element) => (element.value = ""));

        e.currentTarget.disabled = true;
    });

    h1StatusRef.addEventListener("click", function () {
        location.reload();
    });
}
