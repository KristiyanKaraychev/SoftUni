function towns(input) {
    let town = {};
    let towns = [];

    for (let i = 0; i < input.length; i++) {
        let [city, latitude, longitude] = input[i].split(" | ");
        town.town = city;
        town.latitude = Number(latitude).toFixed(2);
        town.longitude = Number(longitude).toFixed(2);
        towns.push(town);
        console.log(towns[i]);
    }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
