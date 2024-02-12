function maxNumber(arr) {
    let arr_max = [];

    for (let i = 0; i < arr.length; i++) {
        let biggest = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                biggest = false;
                break;
            }
        }

        if (biggest) {
            arr_max.push(arr[i]);
        }
    }

    console.log(arr_max.join(" "));
}

maxNumber([1, 2, 3, 4, 5, 0]);
