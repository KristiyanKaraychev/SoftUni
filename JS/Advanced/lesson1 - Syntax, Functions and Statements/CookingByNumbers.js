function cooking(num, op1, op2, op3, op4, op5) {
    let number = Number(num);
    let operations = [op1, op2, op3, op4, op5];

    operations.forEach((element) => {
        switch (element) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number -= number / 5;
                break;
            default:
                break;
        }
        console.log(number);
    });
}

cooking(
    "9",
    "dice",
    "spice",
    "chop",
    "bake",

    "fillet"
);
