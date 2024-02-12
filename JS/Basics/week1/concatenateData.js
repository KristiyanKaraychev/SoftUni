function concatenateData(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[input.length-1];

    console.log("You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".");
}

concatenateData(["Kris","Karaychev",23,"Sofia"]);