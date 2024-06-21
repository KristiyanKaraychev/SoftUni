class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = new Map();
    }

    jobApplication(candidates) {
        let tempNamesArr = new Map();

        for (const candidate of candidates) {
            let [name, education, experience] = candidate.split("-");
            experience = Number(experience);

            if (this.jobCandidates.has(name)) {
                let tempCandidate = this.jobCandidates.get(name);
                if (experience > tempCandidate.experience) {
                    tempCandidate.experience = experience;
                }
            } else {
                this.jobCandidates.set(name, {
                    name: name,
                    education: education,
                    experience: experience,
                });
            }

            if (!tempNamesArr.has(name)) {
                tempNamesArr.set(name);
            }
        }

        return `You successfully added candidates: ${Array.from(
            tempNamesArr.keys()
        ).join(", ")}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minExp] = chosenPerson.split("-");

        if (!this.jobCandidates.has(name)) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        let candidate = this.jobCandidates.get(name);

        if (candidate.experience < minExp) {
            throw new Error(
                `${name} does not have enough experience as ${this.position}, minimum requirement is ${minExp} years.`
            );
        }

        candidate.experience = "hired";

        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        if (!this.jobCandidates.has(name)) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        let candidate = this.jobCandidates.get(name);

        if (candidate.education == "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (candidate.education == "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.size == 0) {
            throw new Error("Candidate Database is empty!");
        }

        let resultString = "Candidates list:";

        let sortedCandidates = Array.from(this.jobCandidates.keys()).sort(
            (a, b) => a.localeCompare(b)
        );

        for (const candidate of sortedCandidates) {
            resultString += `\n${candidate}-${
                this.jobCandidates.get(candidate).experience
            }`;
        }

        return resultString;
    }
}

// let Jobs = new JobOffers("Google", "Strategy Analyst");

// console.log(
//     Jobs.jobApplication([
//         "John Doe-Bachelor-10",
//         "Peter Parker-Master-5",
//         "Daniel Jones- Bachelor-18",
//         "Peter Parker-Master-4",
//         "John Doe-Bachelor-14",
//         "John Doe-Bachelor-10",
//     ])
// );

// console.log(Jobs.jobOffer("John Doe-15"));

//2

// let Jobs = new JobOffers("Google", "Strategy Analyst");

// console.log(
//     Jobs.jobApplication([
//         "John Doe-Bachelor-10",
//         "Peter Parker-Master-5",
//         "Daniel Jones- Bachelor-18",
//     ])
// );

// console.log(Jobs.jobOffer("John Doe-8"));

// console.log(Jobs.jobOffer("Peter Parker-4"));

// console.log(Jobs.jobOffer("John Jones-8"));

// console.log("test");

//3

// let Jobs = new JobOffers("Google", "Strategy Analyst");

// console.log(
//     Jobs.jobApplication([
//         "John Doe-Bachelor-10",
//         "Peter Parker-Master-5",
//         "Daniel Jones- Bachelor-18",
//     ])
// );

// console.log(Jobs.jobOffer("John Doe-8"));

// console.log(Jobs.jobOffer("Peter Parker-4"));

// console.log(Jobs.salaryBonus("John Doe"));

// console.log(Jobs.salaryBonus("Peter Parker"));

//4

let Jobs = new JobOffers("Google", "Strategy Analyst");

// console.log(
//     Jobs.jobApplication([
//         "John Doe-Bachelor-10",
//         "Peter Parker-Master-5",
//         "Jordan Cole-High School-5",
//         "Daniel Jones- Bachelor-18",
//     ])
// );

// console.log(Jobs.jobOffer("John Doe-8"));

// console.log(Jobs.jobOffer("Peter Parker-4"));

// console.log(Jobs.jobOffer("Jordan Cole-4"));

// console.log(Jobs.salaryBonus("Jordan Cole"));

// console.log(Jobs.salaryBonus("John Doe"));

console.log(Jobs.candidatesDatabase());
