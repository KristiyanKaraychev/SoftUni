function attachEventsListeners() {
    console.log("TODO:...");

    let buttons = document.querySelectorAll('input[type="button"]');

    for (const button of buttons) {
        button.addEventListener("click", function (event) {
            convertTime(event, button.previousElementSibling.id);
        });
    }

    function convertTime(event, time) {
        let tempDays = 0;
        let tempHours = 0;
        let tempMinutes = 0;
        let tempSeconds = 0;

        let current = Number(event.target.previousElementSibling.value);

        switch (time) {
            case "days":
                tempDays = current;
                tempHours = current * 24;
                tempMinutes = current * 24 * 60;
                tempSeconds = current * 24 * 60 * 60;
                break;
            case "hours":
                tempDays = current / 24;
                tempHours = current;
                tempMinutes = current * 60;
                tempSeconds = current * 60 * 60;
                break;
            case "minutes":
                tempDays = current / 60 / 24;
                tempHours = current / 60;
                tempMinutes = current;
                tempSeconds = current * 60;
                break;
            case "seconds":
                tempDays = current / 60 / 60 / 24;
                tempHours = current / 60 / 60;
                tempMinutes = current / 60;
                tempSeconds = current;
                break;
            default:
                break;
        }

        document.getElementById("days").value = tempDays;
        document.getElementById("hours").value = tempHours;
        document.getElementById("minutes").value = tempMinutes;
        document.getElementById("seconds").value = tempSeconds;
    }
}
