function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.dividend = 0;
            this.tasks = [];
            this.taskIndex = 0;
        }

        work() {
            if (this.taskIndex >= this.tasks.length) {
                this.taskIndex = 0;
            }

            console.log(this.tasks[this.taskIndex]);
            this.taskIndex++;
        }

        collectSalary() {
            console.log(
                `${this.name} received ${
                    this.salary + this.dividend
                } this month.`
            );
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`,
            ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`,
            ];
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    };
}

const classes = solution();

const junior = new classes.Junior("Ivan", 25);

junior.work();

junior.work();

junior.salary = 5811;

junior.collectSalary();

const senior = new classes.Senior("Alex", 31);

senior.work();

senior.work();

senior.work();

senior.work();

senior.work();

senior.work();

senior.work();

senior.work();

senior.salary = 12050;

senior.collectSalary();
const manager = new classes.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();

manager.work();
manager.work();
manager.work();
manager.work();
// let result = solution();

// var guy1 = new result.Junior("pesho", 20);
// var guy2 = new result.Senior("gosho", 21);
// var guy3 = new result.Manager("ivan", 22);

// console.log("test");
