function cardGame(array) {
    let players = {};

    for (let command of array) {
        let name = command.split(": ")[0];
        let cards = command.split(": ")[1].split(", ");

        if (players.hasOwnProperty(name)) {
            players[name] = players[name].concat(cards);
        } else {
            players[name] = cards;
        }
    }

    for (let key in players) {
        let points = 0;

        if (players.hasOwnProperty(key)) {
            let uniqueCards = new Set(players[key]);
            players[key] = [...uniqueCards];
        }

        for (let card of players[key]) {
            let cardValue;
            if (isNaN(card[0])) {
                cardValue = card[0];
            } else {
                cardValue = parseInt(card);
            }
            let cardType = card[card.length - 1];
            let valuePower = 0;
            let typePower = 0;

            switch (cardType) {
                case "S":
                    typePower = 4;
                    break;
                case "H":
                    typePower = 3;
                    break;
                case "D":
                    typePower = 2;
                    break;
                case "C":
                    typePower = 1;
                    break;
                default:
                    break;
            }

            if (Number(cardValue) >= 2 && Number(cardValue) <= 10) {
                valuePower = Number(cardValue);
            } else {
                switch (cardValue) {
                    case "J":
                        valuePower = 11;
                        break;
                    case "Q":
                        valuePower = 12;
                        break;
                    case "K":
                        valuePower = 13;
                        break;
                    case "A":
                        valuePower = 14;
                        break;
                    default:
                        break;
                }
            }

            points += valuePower * typePower;
        }

        players[key] = Number(points);
    }

    for (let [player, points] of Object.entries(players)) {
        console.log(`${player}: ${points}`);
    }
}

cardGame([
    "Peter: 2C, 4H, 9H, AS, QS",
    "Tomas: 3H, 10S, JC, KD, 5S, 10S",
    "Andrea: QH, QC, QS, QD",
    "Tomas: 6H, 7S, KC, KD, 5S, 10C",
    "Andrea: QH, QC, JS, JD, JC",
    "Peter: JD, JD, JD, JD, JD, JD",
]);
