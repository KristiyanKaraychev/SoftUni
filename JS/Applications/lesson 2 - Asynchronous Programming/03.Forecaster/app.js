function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/forecaster/";
    const submitButton = document.getElementById("submit");
    const locationElement = document.getElementById("location");
    const forecastElement = document.getElementById("forecast");
    const currentForecastElement = document.getElementById("current");
    const upcomingForecastElement = document.getElementById("upcoming");

    const symbols = {
        Sunny: "&#x2600;",
        "Partly sunny": "&#x26C5;",
        Overcast: "&#x2601;",
        Rain: "&#x2614;",
        Degrees: "&#176;",
    };

    submitButton.addEventListener("click", getWeather);

    function getWeather() {
        forecastElement.style.display = "block";

        if (currentForecastElement.children.length > 1) {
            currentForecastElement.removeChild(
                currentForecastElement.children[1]
            );
        }

        if (upcomingForecastElement.children.length > 1) {
            upcomingForecastElement.removeChild(
                upcomingForecastElement.children[1]
            );
        }

        fetch(`${BASE_URL}locations`)
            .then((res) => res.json())
            .then((location) => {
                let locationsList = location;

                let realLocation = locationsList.find(
                    (e) => e.name == locationElement.value
                );

                let code = realLocation.code;

                fetch(`${BASE_URL}today/${code}`)
                    .then((res) => res.json())
                    .then((forecast) => {
                        let name = forecast.name;
                        let condition = forecast.forecast.condition;
                        let high = forecast.forecast.high;
                        let low = forecast.forecast.low;

                        let forecastsNewEl = document.createElement("div");
                        forecastsNewEl.classList.add("forecasts");

                        let conditionSymbolSpan =
                            document.createElement("span");
                        conditionSymbolSpan.classList.add("condition");
                        conditionSymbolSpan.classList.add("symbol");
                        conditionSymbolSpan.innerHTML = symbols[condition];

                        let conditionSpan = document.createElement("span");
                        conditionSpan.classList.add("condition");

                        let locationSpan = document.createElement("span");
                        locationSpan.classList.add("forecast-data");
                        locationSpan.textContent = name;

                        let degreesSpan = document.createElement("span");
                        degreesSpan.classList.add("forecast-data");
                        degreesSpan.innerHTML = `${low}${symbols.Degrees}/${high}${symbols.Degrees}`;

                        let weatherSpan = document.createElement("span");
                        weatherSpan.classList.add("forecast-data");
                        weatherSpan.textContent = condition;

                        conditionSpan.appendChild(locationSpan);
                        conditionSpan.appendChild(degreesSpan);
                        conditionSpan.appendChild(weatherSpan);

                        forecastsNewEl.appendChild(conditionSymbolSpan);
                        forecastsNewEl.appendChild(conditionSpan);

                        currentForecastElement.appendChild(forecastsNewEl);
                    })
                    .catch((err) => {
                        let errorDiv = document.createElement("div");
                        errorDiv.classList.add("forecasts");
                        errorDiv.textContent = "Error";
                        currentForecastElement.appendChild(errorDiv);
                    });

                fetch(`${BASE_URL}upcoming/${code}`)
                    .then((res) => res.json())
                    .then((forecast) => {
                        let days = forecast.forecast;
                        let forecastsNewEl = document.createElement("div");
                        forecastsNewEl.classList.add("forecast-info");

                        days.forEach((e) => {
                            let condition = e.condition;
                            let high = e.high;
                            let low = e.low;

                            let upcomingSpan = document.createElement("span");
                            upcomingSpan.classList.add("upcoming");

                            let upcomingSymbolSpan =
                                document.createElement("span");
                            upcomingSymbolSpan.classList.add("symbol");
                            upcomingSymbolSpan.innerHTML = symbols[condition];

                            let upcomingDegreesSpan =
                                document.createElement("span");
                            upcomingDegreesSpan.classList.add("forecast-data");
                            upcomingDegreesSpan.innerHTML = `${low}${symbols.Degrees}/${high}${symbols.Degrees}`;

                            let upcomingWeatherSpan =
                                document.createElement("span");
                            upcomingWeatherSpan.classList.add("forecast-data");
                            upcomingWeatherSpan.textContent = condition;

                            upcomingSpan.appendChild(upcomingSymbolSpan);
                            upcomingSpan.appendChild(upcomingDegreesSpan);
                            upcomingSpan.appendChild(upcomingWeatherSpan);

                            forecastsNewEl.appendChild(upcomingSpan);
                        });

                        upcomingForecastElement.appendChild(forecastsNewEl);
                    })
                    .catch((err) => {
                        let errorDiv = document.createElement("div");
                        errorDiv.classList.add("forecasts");
                        errorDiv.textContent = "Error";
                        currentForecastElement.appendChild(errorDiv);
                    });
            })
            .catch(() => {
                let errorDiv1 = document.createElement("div");
                errorDiv1.classList.add("forecasts");
                errorDiv1.textContent = "Error";
                currentForecastElement.appendChild(errorDiv1);

                let errorDiv2 = document.createElement("div");
                errorDiv2.classList.add("forecasts");
                errorDiv2.textContent = "Error";
                upcomingForecastElement.appendChild(errorDiv2);
            });
    }
}

attachEvents();
