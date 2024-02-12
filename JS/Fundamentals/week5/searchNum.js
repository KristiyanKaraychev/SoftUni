function searchNum(arr1, arr2) {
    let numAdd = Number(arr2.shift());
    let numRemove = Number(arr2.shift());
    let numFind = Number(arr2.shift());

    let newArr = [];

    for (let i = 0; i < numAdd; i++) {
        newArr.push(arr1[i]);
    }

    for (let i = 0; i < numRemove; i++) {
        newArr.shift();
    }

    let countFound = 0;

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === numFind) {
            countFound++;
        }
    }

    console.log(`Number ${numFind} occurs ${countFound} times.`);
}

searchNum(
    [7, 1, 5, 8, 2, 7],

    [3, 1, 5]
);
