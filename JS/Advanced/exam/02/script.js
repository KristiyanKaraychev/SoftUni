class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (Number(cost) > Number(this.budget)) {
            return `Not enough budget to add '${description}' task.`;
        }

        this.tasks.push({
            description: description,
            cost: cost,
            priority: priority,
        });

        this.budget = Number(this.budget) - Number(cost);

        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description) {
        let foundTask = this.tasks.find((e) => e.description === description);

        if (foundTask) {
            this.tasks.splice(this.tasks.indexOf(foundTask), 1);
            this.completedTasks.push(foundTask);
            return `The task '${description}' has been successfully completed.`;
        } else {
            throw new Error(
                `Task '${description}' not found in the renovation plan.`
            );
        }
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return `The priority cannot be zero or negative.`;
        }

        let priorityTasks = this.tasks.filter(
            (e) => e.priority >= minimalPriority
        );

        if (priorityTasks.length == 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }

        return `You have ${priorityTasks.length} tasks to prioritize.`;
    }

    renovationSummary() {
        if (this.completedTasks.length == 0) {
            throw new Error(`No tasks have been completed yet!`);
        }

        let returnString = `Budget left $${this.budget}.`;
        returnString += `\nYou have completed ${this.completedTasks.length} tasks.`;
        returnString += `\nPending tasks in the renovation plan:`;

        this.tasks.forEach(
            (e) =>
                (returnString += `\n${e.description} - Cost: ${e.cost}, Priority: ${e.priority}`)
        );

        return returnString;
    }
}

//1
// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.addTask("New Roof", 5000, 1));

//2
// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.markTaskAsCompleted("Paint walls"));
// console.log(renovation.markTaskAsCompleted("Change doors"));
// console.log("test");

//3
// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.markTaskAsCompleted("Paint walls"));
// console.log(renovation.getPriorityTasksCount(1));

//4
const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());
