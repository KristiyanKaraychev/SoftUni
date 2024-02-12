function ageDef(age) {

    let output = "";

    switch (true) {
        case age >= 0 && age <= 2:
            output = "baby";
            break;
        
        case age >= 3 && age <= 13:
            output = "child";
            break;
        
        case age >= 14 && age <= 19:
            output = "teenager";
            break;
            
        case age >= 20 && age <= 65:
            output = "adult";
            break;
        
        case age >= 66:
            output = "elder";
            break;
        
        default:
            output = "out of bounds";
            break;
    }

    console.log(`${output}`);

}

ageDef(22);