function buildAWall(arr) {
    let walls = arr.join(" ").split(" ");

    walls = walls.map(Number).sort((a, b) => b - a);

    const concretePerDay = 195;
    const pesosPerCubicYard = 1900;
    let concreteDaily = [];
    let totalConcrete = 0;
    let totalPesos = 0;

    while (walls.filter((n) => n < 30).length > 0) {
        walls = walls.filter((n) => n < 30);
        walls = walls.map((n) => n + 1);

        concreteDaily.push(walls.length * concretePerDay);
        totalConcrete += walls.length * concretePerDay;
    }

    totalPesos = totalConcrete * pesosPerCubicYard;
    console.log(`${concreteDaily.join(", ")}\n${totalPesos} pesos`);
}

buildAWall([17, 22, 17, 19, 17]);
