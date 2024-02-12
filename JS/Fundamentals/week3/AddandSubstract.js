function addAndSubstract(input) {

    let sumInit = 0;
    let sumMod = 0;

    let arrMod = input.slice(0);
    let arrMod_print = "[ ";

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            arrMod[i] += i;
        } else {
            arrMod[i] -= i;
        }

        sumInit += input[i];
        sumMod += arrMod[i];

        arrMod_print += String(arrMod[i] + ", ");

    }

    arrMod_print = arrMod_print.slice(0,-2) + " ]";

    console.log(`${arrMod_print}\n${sumInit}\n${sumMod}`);
}

addAndSubstract([-5, 11, 3, 0, 2]);   