function bombNumber(sequence, power) {
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === power[0]) {
            let deleteFrom = i - power[1];

            if (deleteFrom < 0) {
                deleteFrom = 0;
            }

            let deleteAmount = power[1];

            if (i - deleteAmount < 0) {
                deleteAmount = i;
            }

            sequence.splice(deleteFrom, deleteAmount + power[1] + 1);

            i = i - power[1] - 1;
            if (i <= 0) {
                i = -1;
            }
        }
    }

    let sum = 0;

    for (let num of sequence) {
        sum += num;
    }

    console.log(sum);
}

bombNumber([1, 4, 4, 2, 8, 9, 1], [9, 3]);

//chatGPT

// function detonateSequence(sequence, bombInfo) {
//     const [bombNumber, power] = bombInfo;
//     let sum = 0;

//     while (sequence.includes(bombNumber)) {
//         let bombIndex = sequence.indexOf(bombNumber);
//         let start = Math.max(0, bombIndex - power);
//         let end = Math.min(sequence.length - 1, bombIndex + power);

//         sequence.splice(start, end - start + 1);
//     }

//     for (let num of sequence) {
//         sum += num;
//     }

//     return sum;
// }

// // Test the function
// const sequence = [1, 2, 2, 4, 2, 2, 2, 9];
// const bombInfo = [4, 2];
// console.log(detonateSequence(sequence, bombInfo)); // Output: 12
