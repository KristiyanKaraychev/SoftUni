function addRemoveElements(commands) {
    let num = 1;
    let arr = [];

    for (let command of commands) {
        switch (command) {
            case "add":
                arr.push(num);
                break;
            case "remove":
                arr.pop();
                break;
            default:
                break;
        }
        num++;
    }

    if (arr.length == 0) {
        console.log("Empty");
    } else {
        arr.forEach((element) => console.log(element));
    }
}

addRemoveElements(["remove", "remove", "remove"]);
