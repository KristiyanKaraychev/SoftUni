function Area(input) {

    let figure_type = input[0];
    let area = 0;

    switch(figure_type) {
        case "square":
            let side_sq = input[1];
            area = Math.pow(side_sq,2);
            break;
        case "rectangle":
            let side_rec1 = input[1];
            let side_rec2 = input[2];
            area = side_rec1 * side_rec2;
            break;
        case "circle":
            let radius = input[1];
            area = Math.pow(radius,2) * Math.PI;
            break;
        case "triangle":
            let side_tr = input[1];
            let height = input[2];
            area = height * side_tr / 2;
            break;
    }

    console.log(area.toFixed(3));
}

Area(["triangle", "4.5", "20"]);