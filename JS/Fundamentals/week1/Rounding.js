function rounding(num, precision) {

    let fixedNum = 0;
    
    if (precision > 15) {
        precision = 15;
    }

    fixedNum = num.toFixed(precision);

    console.log(parseFloat(fixedNum));

}

rounding(10.5,3);