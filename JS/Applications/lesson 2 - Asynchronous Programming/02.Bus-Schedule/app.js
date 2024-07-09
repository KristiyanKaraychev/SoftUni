function solve() {
    const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
    const infoElement = document.querySelector(".info");
    const departButtonElement = document.getElementById("depart");
    const arriveButtonElement = document.getElementById("arrive");
    let currentStop = "depot";

    function depart() {
        fetch(BASE_URL + currentStop)
            .then((res) => res.json())
            .then((stop) => {
                let stopName = stop.name;

                infoElement.textContent = `Next stop ${stopName}`;
                departButtonElement.disabled = true;
                arriveButtonElement.disabled = false;
            })
            .catch(() => {
                infoElement.textContent = "Error";
                departButtonElement.disabled = true;
                arriveButtonElement.disabled = true;
            });
    }

    function arrive() {
        fetch(BASE_URL + currentStop)
            .then((res) => res.json())
            .then((stop) => {
                let stopName = stop.name;

                infoElement.textContent = `Arriving at ${stopName}`;
                departButtonElement.disabled = false;
                arriveButtonElement.disabled = true;

                currentStop = stop.next;
            })
            .catch(() => {
                infoElement.textContent = "Error";
                departButtonElement.disabled = true;
                arriveButtonElement.disabled = true;
            });
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
