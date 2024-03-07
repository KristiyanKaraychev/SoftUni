function partyTime(array) {
    let guests = {
        normal: [],
        vip: [],
    };

    let invitedList = [];
    let partyStarted = false;
    let notInvitedList = [];
    let notInvitedSorted = [];

    for (code of array) {
        if (code == "PARTY") {
            partyStarted = true;
            continue;
        }

        if (partyStarted) {
            invitedList.push(code);
        } else {
            if (isNaN(code.charAt(0))) {
                guests["normal"].push(code);
            } else {
                guests["vip"].push(code);
            }
            notInvitedList.push(code);
        }
    }

    for (guest of invitedList) {
        if (guests["normal"].includes(guest)) {
            guests["normal"].splice(guests["normal"].indexOf(guest), 1);
        } else {
            guests["vip"].splice(guests["vip"].indexOf(guest), 1);
        }
        notInvitedList.splice(notInvitedList.indexOf(guest), 1);
    }

    for (guest of notInvitedList) {
        if (!isNaN(guest.charAt(0))) {
            notInvitedSorted.push(guest);
        }
    }

    for (guest of notInvitedList) {
        if (isNaN(guest.charAt(0))) {
            notInvitedSorted.push(guest);
        }
    }

    console.log(guests["normal"].length + guests["vip"].length);

    for (let guest of notInvitedSorted) {
        console.log(guest);
    }
}

// partyTime([
//     "IK9Yo0h",
//     "NoBUajQ",
//     "4Ce8vwPmE",
//     "5SVQXQCbc",
//     "7IK9Yo0h",
//     "9NoBUajQ",
//     "4Ce8vwPmE",
//     "5SVQXQCbc",
//     "6tSzE5t0p",
//     "PARTY",
//     "9NoBUajQ",
//     "4Ce8vwPmE",
//     "5SVQXQCbc",
//     "6tSzE5t0p",
// ]);

partyTime([
    "5IK9Yo0h",
    "NoBUajQ",
    "4Ce8vwPmE",
    "QXQCbc",
    "6tSzE5t0p",
    "4ftyfvwPmE",
    "jghvgyg",
    "6tSzE5t0p",
    "PARTY",
    "4Ce8vwPmE",
    "6tSzE5t0p",
]);
