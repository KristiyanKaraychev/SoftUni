function valCheck(x1, y1, x2, y2) {
    function isValid(number, x1, y1, x2, y2) {
        if (Number.isInteger(number)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
            return;
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
            return;
        }
    }

    function calc(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    isValid(calc(x1, y1, 0, 0), x1, y1, 0, 0);
    isValid(calc(x2, y2, 0, 0), x2, y2, 0, 0);
    isValid(calc(x1, y1, x2, y2), x1, y1, x2, y2);
}

valCheck(3, 0, 0, 4);
