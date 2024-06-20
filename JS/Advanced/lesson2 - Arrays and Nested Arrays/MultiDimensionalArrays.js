function multiArr(arr) {
    let isMagical = true;
    let magicNum = arr[0].reduce((acc, val) => acc + val);

    for (let row of arr) {
        let rowSum = row.reduce((acc, val) => acc + val);
        if (rowSum != magicNum) {
            isMagical = false;
            console.log(isMagical);
            return;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let colSum = 0;
        for (let j = 0; j < arr.length; j++) {
            colSum += arr[j][i];
        }

        if (colSum != magicNum) {
            isMagical = false;
            console.log(isMagical);
            return;
        }
    }

    console.log(isMagical);
}

multiArr([[1, 2, 3, 4, 2], [0, 0, 1], [0, 1, 0], [1]]);
