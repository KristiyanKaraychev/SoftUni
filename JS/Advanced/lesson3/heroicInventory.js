function heroInv(arr) {
    let heroArr = [];

    for (let hero of arr) {
        if (!!hero) {
            let [name, level, items] = hero.split(" / ");
            let heroObj = {
                name,
                level: Number(level),
                items: items ? items.split(", ") : [],
            };
            heroArr.push(heroObj);
        }
    }
    console.log(JSON.stringify(heroArr));
}

heroInv(["Jake / 1000 / Gauss, HolidayGrenade", ""]);
