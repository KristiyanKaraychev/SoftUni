function equalSums(arr) {
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = 0;

        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }

        if (leftSum === rightSum) {
            console.log(i);
            return;
        }

        leftSum += arr[i];
    }

    console.log("no");
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
