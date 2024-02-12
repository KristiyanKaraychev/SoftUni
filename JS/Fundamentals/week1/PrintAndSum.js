function printAndSum(num1, num2) {

    let sum = 0;
    let num_string = ""

    for (let i = num1; i <= num2; i++) {
        
        sum += i;
        
        num_string = num_string.concat(`${i} `)

    };

    console.log(`${num_string}\nSum: ${sum}`);

};

printAndSum(5, 10);