function piccolo(array) {
    let parkingLot = {};

    for (entry of array) {
        let command = entry.split(", ");
        let action = command[0];
        let carNumber = command[1];

        parkingLot[carNumber] = action;
    }

    let isEmpty = true;

    for (entry in parkingLot) {
        if (parkingLot[entry].includes("IN")) {
            isEmpty = false;
            break;
        }
    }

    if (isEmpty) {
        console.log("Parking Lot is Empty");
        return;
    }

    let filteredParking = Object.entries(parkingLot).filter(
        (a) => a[1] == "IN"
    );

    filteredParking.sort((a, b) => a[0].localeCompare(b[0]));

    filteredParking.forEach((entry) => {
        console.log(entry[0]);
    });
}

piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
