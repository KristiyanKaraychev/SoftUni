function companyUsers(arr) {
    let companies = {};

    for (let entry of arr) {
        let name = entry.split(" -> ")[0];
        let id = entry.split(" -> ")[1];

        if (companies.hasOwnProperty(name)) {
            companies[name].push(id);
        } else {
            companies[name] = [id];
        }
    }

    let sortedArray = Object.entries(companies).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    let sortedCompanies = {};

    for (let company of sortedArray) {
        sortedCompanies[company[0]] = company[1];
    }

    for (let key in sortedCompanies) {
        if (sortedCompanies.hasOwnProperty(key)) {
            let uniqueIds = new Set(sortedCompanies[key]);
            sortedCompanies[key] = [];
            sortedCompanies[key] = [...uniqueIds];
        }

        console.log(key);

        for (let id of sortedCompanies[key]) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers([
    "SoftUni -> AA12345",
    "SoftUni -> AA12345",
    "Lenovo -> XX23456",
    "SoftUni -> AA12345",
    "Movement -> DD11111",
]);
