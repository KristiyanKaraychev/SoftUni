function diagonalAttack(input) {
    let matrix = [];

    for (let line of input) {
        matrix.push(line.split(" "));
    }

    matrix = matrix.map((row) => row.map((element) => Number(element)));

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    let newMatrix = [];

    if (mainDiagonalSum == secondaryDiagonalSum) {
        for (let i = 0; i < matrix.length; i++) {
            newMatrix[i] = [];
            for (let j = 0; j < matrix[0].length; j++) {
                newMatrix[i].push(mainDiagonalSum);
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            newMatrix[i][i] = matrix[i][i];
            newMatrix[i][matrix.length - 1 - i] =
                matrix[i][matrix.length - 1 - i];
        }
    } else {
        newMatrix = matrix.map((row) => row.slice());
    }

    let print = "";
    for (let row of newMatrix) {
        print += row.join(" ") + "\n";
    }

    console.log(print);
}

diagonalAttack([
    "5 3 12 3 1",

    "11 4 23 2 5",

    "101 12 3 21 10",

    "1 4 5 2 2",

    "5 22 33 11 1",
]);
