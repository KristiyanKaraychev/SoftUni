function sumDigits(num) {
    let numString = String(num);
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString.charAt(i));
    }

    console.log(sum);
}

sumDigits(245678);