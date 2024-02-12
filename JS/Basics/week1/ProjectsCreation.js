function ProjectsCreation(input){
    let name = input[0];
    let projects = input[1];
    let hours = 3 * projects;
    console.log("The architect " + name + " will need " + hours + " hours to complete " + projects + " project/s.");
}

ProjectsCreation(["Kris",10]);