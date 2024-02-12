function MergeArrays(arr1, arr2) {

    let arr_merged = [];

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            arr_merged[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            arr_merged[i] = arr1[i] + arr2[i];
        }
    }

    console.log(arr_merged.join(' - '));
}

MergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11']);