function GCD(num1, num2) {
    // let smaller = 0;

    // if (num1 > num2) {
    //     smaller = num2;
    // } else {
    //     smaller = num1;
    // }

    // for (let i = smaller; i > 0; i--) {
    //     if (num1 % i === 0 && num2 % i === 0) {
    //         console.log(i);
    //         return;
    //     }
    // }

    let divisor = num1 & num2;

    while (divisor !== 0) {
        num1 = num2;
        num2 = divisor;
        divisor = num1 % num2;
    }

    console.log(num2);
}

GCD(15, 5);
