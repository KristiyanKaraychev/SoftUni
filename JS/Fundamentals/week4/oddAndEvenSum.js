function oddAndEvenSum(num) {

    let numString = num.toString();

    let sumEven = 0;
    let sumOdd = 0;

    function sumOfEven(string) {
        for (let char of string) {
            
            let digit = Number(char);
            
            if (digit % 2 === 0) {
                sumEven += digit;
            }
        }

        return sumEven;
    }

    function sumOfOdd (string) {
        for (let char of string) {
            
            let digit = Number(char);
            
            if (digit % 2 !== 0) {
                sumOdd += digit;
            }
        }

        return sumOdd;
    }

    console.log(`Odd sum = ${sumOfOdd(numString)}, Even sum = ${sumOfEven(numString)}`);
}

oddAndEvenSum(3495892137259234);