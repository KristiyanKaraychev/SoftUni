function NxNMatrix(num) {

    function printColumn(num) {
        let string = "";

        for (let i = 0; i < num; i++) {
            string += num + " ";
        }

        return string;
    }

    function printRow(num) {

        let string = "";

        for (let i = 0; i < num; i++) {
            string += printColumn(num) + "\n";
        }

        return string;
    }

    console.log(printRow(num));

}

NxNMatrix(32);