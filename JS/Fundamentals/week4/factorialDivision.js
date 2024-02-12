function factorialDivision(a, b) {

    let firstIter = true;
    let factorialTemp = 1;


    function factorial(num) {

        if (firstIter) {
            factorialTemp = 1;
        }

        if (num <= 1) {
            firstIter = true;
            return factorialTemp;
        } else {
            firstIter = false;
            factorialTemp *= num;
            return factorial(num-1);
        }
    }

    function divisionOfTwoNums(num1, num2) {
        return (num1/num2).toFixed(2);
    }

    console.log(divisionOfTwoNums(factorial(a),factorial(b)));

}

factorialDivision(5,2);