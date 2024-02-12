function sorting(arr) {
    arr = arr.sort((a, b) => b - a);
    let sortedArr = [];

    for (let i = 0; i < arr.length / 2; i++) {
        sortedArr.push(arr[i]);
        if (!(i === (arr.length - 1) / 2)) {
            sortedArr.push(arr[arr.length - 1 - i]);
        }
    }

    console.log(sortedArr.join(" "));
}

sorting([1, 21, 4]);
