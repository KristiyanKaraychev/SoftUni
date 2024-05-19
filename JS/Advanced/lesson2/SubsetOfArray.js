function subsetOfArr(arr) {
    let filteredArr = [arr.shift()];
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= filteredArr[counter]) {
            filteredArr.push(arr[i]);
            counter++;
        }
    }

    return filteredArr;
}

subsetOfArr([20, 3, 2, 15, 6, 1]);
