function previousDay(year, month, date) {
    let previous = new Date(year, month - 1, date - 1);

    console.log(
        `${previous.getFullYear()}-${
            previous.getMonth() + 1
        }-${previous.getDate()}`
    );
}

previousDay(2015, 1, 1);
