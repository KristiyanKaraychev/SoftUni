function solve(arr, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    for (let description of arr) {
        let command = description.split("|");
        let tempTicket = new Ticket(command[0], command[1], command[2]);
        tickets.push(tempTicket);
    }

    tickets.sort((a, b) => {
        if (sorting == "price") {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare(b[sorting]);
        }
    });

    return tickets;
}

solve(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "destination"
);
