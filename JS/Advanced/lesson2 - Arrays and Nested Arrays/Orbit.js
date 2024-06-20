function orbit(input) {
    let width = input.shift();
    let height = input.shift();
    let x = input.shift();
    let y = input.shift();
    let matrix = [];

    for (let i = 0; i < height; i++) {
        let tempArr = Array(width);
        matrix.push(tempArr.fill(0));
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    matrix.forEach((element) => console.log(element.join(" ")));
}

orbit([5, 5, 2, 3]);
