function minerTask(input) {
    let resources = {};

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            if (!resources.hasOwnProperty(input[i])) {
                resources[input[i]] = 0;
            }
        } else {
            resources[input[i - 1]] += Number(input[i]);
        }
    }

    for (let [key, value] of Object.entries(resources)) {
        console.log(`${key} -> ${value}`);
    }
}

minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
