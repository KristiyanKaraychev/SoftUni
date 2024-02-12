function workingHours(input) {

    let time = Number(input[0]);
    let day = input[1];
    let workingDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    if (time >= 10 && time <= 18 && workingDays.includes(day)) {
        console.log("open");
    } else {
        console.log("closed");
    }

}

workingHours(["11", "Sunday"]);