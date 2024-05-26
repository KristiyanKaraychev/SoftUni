function jansNotation(input) {
    let numbers = [];
    let operators = [];

    // if (operators.length >= numbers.length) {
    //     console.log("Error: not enough operands!");
    //     return;
    // }

    for (const element of input) {
        if (isNaN(element)) {
            if (numbers.length >= 2) {
                let num2 = numbers.pop();
                let num1 = numbers.pop();
                let result = 0;

                switch (element) {
                    case "+":
                        result = num1 + num2;
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "*":
                        result = num1 * num2;
                        break;
                    case "/":
                        result = num1 / num2;
                        break;
                    default:
                        break;
                }

                numbers.push(result);
            } else {
                console.log("Error: not enough operands!");
                return;
            }
        } else {
            numbers.push(element);
        }
    }

    if (numbers.length > 1) {
        console.log("Error: too many operands!");
    } else {
        console.log(numbers[0]);
    }
}

jansNotation([15, "/"]);
