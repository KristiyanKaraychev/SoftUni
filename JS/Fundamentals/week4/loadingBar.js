function loadingBar(percentage) {

    function fillBar(num) {

        let printBar = `[`;
        let temp = 10;

        for (let i = 0; i < 10; i ++) {
            if (temp <= num) {
                printBar += "%";
            } else {
                printBar += ".";
            }

            temp += 10;
        }

        printBar += "]";

        return printBar;
    }

    

    if (percentage < 100) {
        console.log(`${percentage}% ${fillBar(percentage)}\nStill loading...`);
    } else {
        console.log(`100% Complete!\n${fillBar(percentage)}`);
    }

}

loadingBar(33);