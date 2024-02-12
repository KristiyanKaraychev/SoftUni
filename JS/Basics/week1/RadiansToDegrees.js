function RadiansToDegrees(input){
    let radian = Number(input[0]);
    const pi = Math.PI;
    let degrees = radian * 180 / pi;
    console.log(degrees);
}

RadiansToDegrees([3.1416]);