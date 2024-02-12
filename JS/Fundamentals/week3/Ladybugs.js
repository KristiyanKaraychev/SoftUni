function ladybugs(input) {

    let field = [];
    field.length = Number(input[0]);

    // initialize field to have 0 on all cells
    for (let i = 0; i < field.length; i++) {
        field[i] = 0;
    }

    // set the cells in field which have ladybugs to 1
    for (let i = 0; i < input[1].split(" ").length; i++) {
        if (Number(input[1].split(" ")[i]) < field.length) {
            field[Number(input[1].split(" ")[i])] = 1;
        }
    }

    // console.log(field);

    // for each of the commands
    for (let i = 2; i < input.length; i++) {

        let temp = input[i].split(" ");         // split the command
        let ladybug_index = Number(temp[0]);    // index that we want to move [0..{size of field}]
        let direction = temp[1];                // direction ['right','left']
        let flight_length = Number(temp[2]);    // spaces which the ladybug moves [-inf,+inf]

        // checks if there is a ladybug on the index
        if (field[ladybug_index] === 1) {
            
            //removes ladybug from index
            field[ladybug_index] = 0;

            if (direction === "right") {
                
                if (ladybug_index + flight_length < field.length) {

                    // checks to see if there is already a ladybug on the desired index
                    if (field[ladybug_index + flight_length] === 1) {
                        
                        // loops around each of the possible indexes where the ladybug can land
                        for (let j = ladybug_index + flight_length; j < field.length; j = j + flight_length) {

                            if (field[j] !== 1) {
                                field[j] = 1;
                                break;
                            }
                        }

                    } else {
                        field[ladybug_index + flight_length] = 1;
                    }
                }

            } else if (direction === "left") {

                if (ladybug_index - flight_length >= 0) {

                    if (field[ladybug_index - flight_length] === 1) {

                        for (let j = ladybug_index - flight_length; j >= 0; j = j - flight_length) {
                            
                            if (field[j] !== 1) {
                                field[j] = 1;
                                break;
                            }
                        }
                    } else {
                        field[ladybug_index - flight_length] = 1;
                    }
                }
            }
            
        }
        
        // console.log(field);
    }

    console.log(field.join(" "));
}

// ladybugs([ 3, '0 1','0 right 1','2 right 1' ]);
// ladybugs([ 3, '0 1 2','0 right 1','1 right 1', '2 right 1']);
// ladybugs([ 5, '3', '3 left 2','1 left -2']);
ladybugs([ 32, '3 5 7 23 1 55', '3 left 2','1 left -2']);