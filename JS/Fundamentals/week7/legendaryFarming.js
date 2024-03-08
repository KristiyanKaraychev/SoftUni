function legendaryFarming(input) {
    let materials = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };

    let junk = {};

    let arr = input.split(" ");
    let weapon = "";

    for (let i = 1; i <= arr.length; i += 2) {
        let material = arr[i].toLowerCase();
        let amount = Number(arr[i - 1]);

        if (materials.hasOwnProperty(material)) {
            materials[material] += amount;

            if (materials[material] >= 250) {
                switch (material) {
                    case "shards":
                        weapon = "Shadowmourne";
                        break;
                    case "fragments":
                        weapon = "Valanyr";
                        break;
                    case "motes":
                        weapon = "Dragonwrath";
                        break;
                    default:
                        break;
                }
                materials[material] -= 250;
                console.log(`${weapon} obtained!`);
                break;
            }
        } else {
            if (junk.hasOwnProperty(material)) {
                junk[material] += amount;
            } else {
                junk[material] = amount;
            }
        }
    }

    let orderedMaterials = Object.entries(materials).sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    let orderedJunk = Object.entries(junk).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (let [type, num] of orderedMaterials) {
        console.log(`${type}: ${num}`);
    }

    for (let [type, num] of orderedJunk) {
        console.log(`${type}: ${num}`);
    }
}

legendaryFarming("22 motes 20 fragments 22 shards 2 fragments");
