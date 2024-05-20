function spiral(matrix) {
    const arr = [];

    while (matrix.length) {
        arr.push(
            ...matrix.shift(),
            ...matrix.map((a) => a.pop()),
            ...(matrix.pop() || []).reverse(),
            ...matrix.map((a) => a.shift()).reverse()
        );
    }
    return arr;
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

console.log(spiral(matrix)); // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
