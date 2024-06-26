function roadRadar(speed, place) {
    let limit = 0;

    switch (place) {
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
        default:
            break;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status = "";
        if (speed - limit <= 20) {
            status = "speeding";
        } else if (speed - limit <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        console.log(
            `The speed is ${
                speed - limit
            } km/h faster than the allowed speed of ${limit} - ${status}`
        );
    }
}

roadRadar(200, "motorway");
