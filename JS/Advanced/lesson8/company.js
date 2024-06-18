class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (
            !!name == false ||
            !!salary == false ||
            !!position == false ||
            department == false
        ) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        let newEmployee = {
            name: name,
            salary: salary,
            position: position,
        };
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push(newEmployee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let departmentsArr = Object.entries(this.departments);

        for (const department of departmentsArr) {
            let totalSalary = 0;
            for (const worker of department[1]) {
                totalSalary += worker.salary;
            }
            let averageSalary = totalSalary / department[1].length;
            department.push(averageSalary);
        }

        let bestDepartment = departmentsArr.sort((a, b) => b[2] - a[2])[0];

        bestDepartment[1].sort(
            (a, b) => b.salary - a.salary || a.name.localeCompare(b.name)
        );

        let output = `Best Department is: ${
            bestDepartment[0]
        }\nAverage salary: ${bestDepartment[2].toFixed(2)}`;

        for (const employee of bestDepartment[1]) {
            output += `\n${employee.name} ${employee.salary} ${employee.position}`;
        }

        return output;
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
