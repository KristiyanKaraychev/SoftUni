function distinctArray(arr) {
    let uniqueNums = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueNums.includes(arr[i])) {
            uniqueNums.push(arr[i]);
        }
    }

    console.log(uniqueNums.join(" "));
}

distinctArray([
    20, 8, 12, 13, 4,

    4, 8, 5,
]);
