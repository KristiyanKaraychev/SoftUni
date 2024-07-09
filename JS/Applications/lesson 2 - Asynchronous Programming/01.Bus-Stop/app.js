function getInfo() {
    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";
    const busStopElement = document.getElementById("stopId");
    const busStopID = busStopElement.value;
    const stopNameElement = document.getElementById("stopName");
    const busesUlElement = document.getElementById("buses");

    busesUlElement.replaceChildren();

    fetch(BASE_URL + busStopID)
        .then((res) => res.json())
        .then((stop) => {
            let stopName = stop.name;
            let stopBuses = stop.buses;
            stopNameElement.textContent = stopName;

            Object.entries(stopBuses).forEach(([key, value]) => {
                let tempStop = document.createElement("li");
                tempStop.textContent = `Bus ${key} arrives in ${value} minutes`;
                busesUlElement.appendChild(tempStop);
            });
        })
        .catch(function (error) {
            stopNameElement.textContent = "Error";
        });
}
