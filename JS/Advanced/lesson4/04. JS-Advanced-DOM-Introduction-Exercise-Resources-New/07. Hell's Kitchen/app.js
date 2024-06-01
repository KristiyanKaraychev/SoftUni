function solve() {
    document.querySelector("#btnSend").addEventListener("click", onClick);

    let textAreaElement = document.querySelector("textarea");
    let bestRestaurantPElement = document
        .getElementById("bestRestaurant")
        .getElementsByTagName("p");
    let bestRestaurantPWorkersElement = document
        .getElementById("workers")
        .getElementsByTagName("p");

    let kitchen = {};

    function onClick() {
        //   TODO:
        let input = textAreaElement.value;
        input = input.slice(2, -2);

        let array = input.split('","');

        for (const el of array) {
            let command = el.split(" - ");
            let restaurant = command[0];
            let peopleCommand = command[1];
            let personSalary = peopleCommand.split(", ");

            if (!kitchen.hasOwnProperty(restaurant)) {
                kitchen[restaurant] = {
                    averageSalary: 0,
                    bestSalary: 0,
                    workers: {},
                };
            }

            for (const person of personSalary) {
                let commandPerson = person.split(" ");
                let name = commandPerson[0];
                let salary = Number(commandPerson[1]);

                kitchen[restaurant].workers[name] = salary;
            }
        }

        debugger;

        for (const restaurant in kitchen) {
            let sumSalary = 0;
            let bestSalary = 0;

            for (const worker in kitchen[restaurant].workers) {
                let salary = kitchen[restaurant].workers[worker];

                sumSalary += salary;

                if (salary > bestSalary) {
                    bestSalary = salary;
                }
            }

            kitchen[restaurant].averageSalary = (
                sumSalary / Object.keys(kitchen[restaurant].workers).length
            ).toFixed(2);
            kitchen[restaurant].bestSalary = bestSalary.toFixed(2);
        }

        let bestRestaurant = findBestRestaurant(kitchen);
        let bestRestaurantText = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].averageSalary} Best Salary: ${bestRestaurant[1].bestSalary}`;
        bestRestaurantPElement[0].textContent = bestRestaurantText;

        let workersArr = Object.entries(bestRestaurant[1].workers);
        let sortedWorkers = workersArr.sort((a, b) => b[1] - a[1]);

        let bestWorkersText = "";

        for (const worker of sortedWorkers) {
            bestWorkersText += `Name: ${worker[0]} With Salary: ${worker[1]} `;
        }
        bestRestaurantPWorkersElement[0].textContent = bestWorkersText;
    }

    function findBestRestaurant(restaurants) {
        let restaurantsSorted = Object.entries(restaurants).sort(
            (a, b) => b[1].averageSalary - a[1].averageSalary
        );
        return restaurantsSorted[0];
    }
}

//["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]
//["A - A1 100, A2 200, A3 300","A - A4 400, A5 500"]
