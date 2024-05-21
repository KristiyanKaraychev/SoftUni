function spiralMatrix(x, y) {
    let matrix = [];

    for (let i = 0; i < x; i++) {
        let tempArr = Array(y);
        matrix[i] = tempArr.fill(0);
    }

    let counter = 0;
    let tempX = 0;
    let tempY = 0;
    let step = 0;

    while (counter < x * y) {
        while (tempY + step < y) {
            counter++;
            matrix[tempX][tempY] = counter;
            tempY++;
        }
        tempY--;
        tempX++;

        while (tempX + step < x) {
            counter++;
            matrix[tempX][tempY] = counter;
            tempX++;
        }

        tempX--;
        tempY--;
        //step++;

        while (tempY >= step) {
            counter++;
            matrix[tempX][tempY] = counter;
            tempY--;
        }

        tempX--;
        tempY++;
        step++;

        while (tempX >= step) {
            counter++;
            matrix[tempX][tempY] = counter;
            tempX--;
        }

        tempY++;
        tempX++;
    }

    matrix.forEach((arr) => console.log(arr.join(" ")));
}

spiralMatrix(9, 9);
