function palindrome(array) {

    for (let num of array) {
        palindromeCheck(num);
    }

    function palindromeCheck(num) {
        let string = num.toString();
        let stringReversed = string.split('').reverse().join('')

        if (string === stringReversed) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

palindrome([32,2,232,1010]);