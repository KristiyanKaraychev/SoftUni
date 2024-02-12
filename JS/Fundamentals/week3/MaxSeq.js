function maxSeq(arr) {

    
    let temp_arr = [];
    let temp = arr[0];
    let counter = 0;

    let longest = 0;
    let longest_arr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === temp) {
            temp_arr.push(arr[i]);
            counter++;
        } else {
            temp = arr[i];
            temp_arr = [arr[i]];
            counter = 1;
            continue;
        }

        if (counter > longest) {
            longest = counter;
            longest_arr = temp_arr.slice(0);
        }
    }

    console.log(longest_arr.join(' '));
}

maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3]);