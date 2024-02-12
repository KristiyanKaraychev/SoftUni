function charInRange(char1, char2) {
    
    function charToASCII(char1, char2) {
        
        let firstSymbol = 0;
        let lastSymbol = 0;

        if (char1.charCodeAt() < char2.charCodeAt()) {
            firstSymbol = char1.charCodeAt();
            lastSymbol = char2.charCodeAt();
        } else {
            firstSymbol = char2.charCodeAt();
            lastSymbol = char1.charCodeAt();
        }

        let arr = new Array;

        for (let i = firstSymbol + 1; i < lastSymbol; i++) {
            arr.push(i);
        }

        return arr;
    }

    function ASCIIToString(char1, char2) {
        
        let array = charToASCII(char1, char2);
        let string = "";

        for (let char in array) {
            string += String.fromCharCode(array[char]) + " ";
        }

        return(string);
    }

    console.log(ASCIIToString(char1,char2));

}

charInRange('C',

'#')