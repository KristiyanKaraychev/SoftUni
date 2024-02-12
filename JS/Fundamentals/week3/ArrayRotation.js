function arrayRot(arr, rot) {

    // let iter = rot;
    // let rotated_arr = arr.slice(0);

    // while (iter > 0) {
    //     let temp = rotated_arr[0];

    //     for (let i = 0; i < rotated_arr.length; i++) {
    //         if (i === arr.length - 1) {
    //             rotated_arr[i] = temp;
    //         } else {
    //             rotated_arr[i] = rotated_arr[i+1];
    //         }
    //     }

    //     iter--;
    // }


    for (let i = 0; i < rot; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }

    console.log(arr.join(' '));

}

arrayRot([2, 4, 15, 31], 5);