function sortNums(arr) {
    arr.sort((a, b) => a - b);

    let sortedArr = [];
    let smallCount = 0;
    let bigCount = 1;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            sortedArr.push(arr[smallCount]);
            smallCount++;
        } else {
            sortedArr.push(arr[arr.length - bigCount]);
            bigCount++;
        }
    }

    return sortedArr;
}

sortNums([22, 9, 63, 3, 2, 19, 54, 11, 21]);
