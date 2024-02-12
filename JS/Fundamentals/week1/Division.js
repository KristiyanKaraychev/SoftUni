function division(num) {

    let output = "";

    switch (true) {
        case num % 10 === 0:
            output = "The number is divisible by 10";
            break;
        
        case num % 7 === 0:
            output = "The number is divisible by 7";
            break;
        
        case num % 6 === 0:
            output = "The number is divisible by 6";
            break;
        
        case num % 3 === 0:
            output = "The number is divisible by 3";
            break;
        
        case num % 2 === 0:
            output = "The number is divisible by 2";
            break;
        
        default:
            output = "Not divisible";
            break;
    }

    console.log(`${output}`);

}

division(1640);