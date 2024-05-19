function ticTacToe(arr) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ];

    let hasWon = false;
    let counter = 0;
    let player = 0;
    let spaces = 9;

    while (counter < arr.length) {
        if (spaces == 0) {
            break;
        }

        let turn = arr[counter].split(" ");
        let row = turn[0];
        let column = turn[1];
        if (board[row][column] == false) {
            if (player % 2 == 0) {
                board[row][column] = "X";
            } else {
                board[row][column] = "O";
            }
            spaces--;
        } else {
            console.log("This place is already taken. Please choose another!");
            player++;
        }

        // console.log(turn);
        // console.table(board);

        if (checkWin(board)) {
            hasWon = true;
            break;
        }

        counter++;
        player++;
    }

    if (hasWon) {
        if (player % 2 == 0) {
            console.log("Player X wins!");
        } else {
            console.log("Player O wins!");
        }
    } else {
        console.log("The game ended! Nobody wins :(");
    }

    let print = "";

    for (row of board) {
        print += row.join("\t") + "\n";
    }

    console.log(print);

    function checkWin(matrix) {
        //rows
        for (let i = 0; i < matrix.length; i++) {
            let match = true;
            for (let j = 1; j < matrix[i].length; j++) {
                if (
                    typeof matrix[i][j] !== "string" ||
                    typeof matrix[i][j - 1] !== "string"
                ) {
                    match = false;
                    break;
                }

                if (matrix[i][j] !== matrix[i][j - 1]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            } else {
                break;
            }
        }

        //columns
        for (let i = 0; i < matrix[0].length; i++) {
            let match = true;
            for (let j = 1; j < matrix.length; j++) {
                if (
                    typeof matrix[j][i] !== "string" ||
                    typeof matrix[j - 1][i] !== "string"
                ) {
                    match = false;
                    break;
                }

                if (matrix[j][i] !== matrix[j - 1][i]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            } else {
                break;
            }
        }

        //diagonal main
        let match = true;
        for (let i = 1; i < matrix.length; i++) {
            if (
                typeof matrix[i][i] !== "string" ||
                typeof matrix[i - 1][i - 1] !== "string"
            ) {
                match = false;
                break;
            }

            if (matrix[i][i] !== matrix[i - 1][i - 1]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }

        //diagonal secondary
        match = true;
        for (let i = 1; i < matrix.length; i++) {
            if (
                typeof matrix[i][matrix.length - 1 - i] !== "string" ||
                typeof matrix[i - 1][matrix.length - i] !== "string"
            ) {
                match = false;
                break;
            }

            if (
                matrix[i][matrix.length - 1 - i] !==
                matrix[i - 1][matrix.length - i]
            ) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }

        return false;
    }
}

ticTacToe([
    "0 1",

    "0 0",

    "0 2",

    "2 0",

    "1 0",

    "1 1",

    "1 2",

    "2 2",

    "2 1",

    "0 0",
]);
