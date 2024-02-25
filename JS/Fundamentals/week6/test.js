function objectDemo() {
    let person = {
        name: "Kris",
        age: 23,
        dog: {
            name: "Kuche",
            age: 1,
        },
    };

    // let secondPerson = person;   //reference
    let secondPerson = Object.assign({}, person); //shallow
    //let secondPerson = JSON.parse(JSON.stringify(person));    //deep

    secondPerson["name"] = "Eva";
    secondPerson["gender"] = "female";

    secondPerson["dog"]["name"] = "Aspen";
    secondPerson["dog"]["gender"] = "female";

    console.log(person);
    console.log(secondPerson);

    console.log(person["dog"]);
    console.log(secondPerson["dog"]);
}

objectDemo();
