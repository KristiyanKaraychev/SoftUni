function triangle(num) {

    for (let i = 1; i<= num; i++) {
        
        let output = "";
        
        for (let j = 1; j<= i; j++) {
            output += i + " ";
        };

        console.log(output)

    };

};

triangle(6);