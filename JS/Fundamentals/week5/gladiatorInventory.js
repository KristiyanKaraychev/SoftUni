function gladiatorInventory(arr) {
    let inventory = arr.shift().split(" ");
    let commands = arr;

    for (let command of commands) {
        let tokens = command.split(" ");
        let action = tokens.shift();
        let item = tokens.shift();

        switch (action) {
            case "Buy":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case "Trash":
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;
            case "Repair":
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(item);
                }
                break;
            case "Upgrade":
                item = item.split("-");
                if (inventory.includes(item[0])) {
                    inventory.splice(
                        inventory.indexOf(item[0]) + 1,
                        0,
                        item.join(":")
                    );
                }
                break;
            default:
                break;
        }
    }

    console.log(inventory.join(" "));
}

gladiatorInventory([
    "SWORD Shield Spear",
    "Trash Bow",
    "Repair Shield",
    "Upgrade Helmet-V",
]);

// gladiatorInventory([
//     "SWORD Shield Spear",
//     "Buy Bag",
//     "Trash Shield",
//     "Repair Spear",
//     "Upgrade SWORD-Steel",
// ]);
