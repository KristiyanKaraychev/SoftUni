function employees(input) {
    let employee = {};
    let employees = [];

    // for (let i of input) {
    //     employee.name = i;
    //     employee.number = employee.name.length;
    //     employees.push(employee);
    //     console.log(employees);
    //     console.log(
    //         `Name: ${employees[i]} -- Personal Number: ${employees[i]}`
    //     );
    // }

    input.forEach((name, index) => {
        employee.name = name;
        employee.number = employee.name.length;
        employees.push(employee);
        console.log(
            `Name: ${employees[index].name} -- Personal Number: ${employees[index].number}`
        );
    });
}

employees([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
