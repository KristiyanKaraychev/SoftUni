function partyTime(array) {
    let VIPguestList = {};
    let guestList = {};
    let invitedList = [];
    let notInvited = [];
    let partyStarted = false;
    let tempVIP = 0;
    let tempNormal = 0;
    let VIPguestListInvited = {};
    let guestListInvited = {};

    for (code of array) {
        if (code == "PARTY") {
            partyStarted = true;
            continue;
        }

        if (partyStarted) {
            invitedList.push(code);
            if (!isNaN(parseInt(code.charAt(0)))) {
                VIPguestListInvited[code] = 1;
            } else {
                guestListInvited[code] = 1;
            }
        } else {
            if (!isNaN(parseInt(code.charAt(0)))) {
                if (VIPguestList.hasOwnProperty(code)) {
                    tempVIP = VIPguestList[code];
                    delete VIPguestList[code];
                    VIPguestList[code] = tempVIP + 1;
                } else {
                    VIPguestList[code] = 1;
                }
            } else {
                if (guestList.hasOwnProperty(code)) {
                    tempNormal = guestList[code];
                    delete guestList[code];
                    guestList[code] = tempNormal + 1;
                } else {
                    guestList[code] = 1;
                }
            }
        }
    }

    // console.log(VIPguestList);
    // console.log(guestList);

    if (partyStarted) {
        for (let guest in VIPguestList) {
            if (!Object.keys(VIPguestListInvited).includes(guest)) {
                notInvited.push(guest);
            }
        }

        for (let guest in guestList) {
            if (!Object.keys(guestListInvited).includes(guest)) {
                notInvited.push(guest);
            }
        }

        let sum = 0;

        for (let guest of notInvited) {
            if (VIPguestList.hasOwnProperty(guest)) {
                sum += VIPguestList[guest];
            }
            if (guestList.hasOwnProperty(guest)) {
                sum += guestList[guest];
            }
        }

        console.log(sum);

        // console.log(notInvited.length);

        notInvited.forEach((guest) => {
            console.log(guest);
        });
    }
}

// partyTime(["PARTY", "aaa", "6666"]);

// partyTime([
//     "7IK9Yo0h",
//     "9NoBUajQ",
//     "Ce8vwPmE",
//     "SVQXQCbc",
//     "2asdads",
//     "7IK9Yo0h",
//     "tSzE5t0p",
//     "PARTY",
//     "9NoBUajQ",
//     "Ce8vwPmE",
//     "SVQXQCbc",
// ]);

partyTime([
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "xys2FYzn",
    "MDzcM9ZK",
    "PARTY",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
]);
