function carFactory(car) {
    let newCar = {};

    let carPower = 0;
    let carVolume = 0;

    if (car.power <= 90) {
        carPower = 90;
        carVolume = 1800;
    } else if (car.power <= 120) {
        carPower = 120;
        carVolume = 2400;
    } else if (car.power <= 200) {
        carPower = 200;
        carVolume = 3500;
    }

    let carWheels = car.wheelsize;
    if (car.wheelsize % 2 == 0) {
        carWheels -= 1;
    }

    newCar.model = car.model;
    newCar.engine = { power: carPower, volume: carVolume };
    newCar.carriage = { type: car.carriage, color: car.color };
    newCar.wheels = new Array(4).fill(carWheels);

    return newCar;
}

carFactory({
    model: "Ferrari",
    power: 200,
    color: "red",
    carriage: "coupe",
    wheelsize: 21,
});
