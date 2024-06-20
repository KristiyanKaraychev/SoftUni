function sameNumbers(num) {
    let string = num.toString();
    let sum = 0;
    let numBool = true;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) != string.charAt(0)) {
            numBool = false;
        }
        sum += Number(string.charAt(i));
    }

    console.log(numBool);
    console.log(sum);
}

sameNumbers(1234);
