function magicSum(arr, sum) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            let temp_arr = [];

            if (arr[i] + arr[j] === sum) {
                temp_arr.push(arr[i]);
                temp_arr.push(arr[j]);
                console.log(temp_arr.join(" "));
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8],

    27);