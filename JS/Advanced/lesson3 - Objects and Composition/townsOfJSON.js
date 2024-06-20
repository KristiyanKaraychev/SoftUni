function townsToJSON(arr) {
    let regex = /\s{0,}\|\s{0,}/gm;
    let [key1, key2, key3] = arr
        .shift()
        .split(regex)
        .filter((n) => n);

    let towns = [];

    for (const command of arr) {
        let [town, latitude, longitude] = command.split(regex).filter((n) => n);

        towns.push({
            [key1]: town,
            [key2]: parseFloat(Number(latitude).toFixed(2)),
            [key3]: parseFloat(Number(longitude).toFixed(2)),
        });
    }

    console.log(JSON.stringify(towns));
}

townsToJSON([
    "| Town | Latitude | Longitude |",

    "| Sofia | 42.696552 | 23.32601 |",

    "| Beijing | 39.913818 | 116.363625 |",
]);
