function exactFile(input) {
    let items = input.split("\\");
    let file = "";
    let extension = "";

    for (let item of items) {
        if (item.includes(".")) {
            file = item.slice(0, item.lastIndexOf("."));
            extension = item.slice(item.lastIndexOf(".") + 1);
        }
    }

    console.log(`File name: ${file}\nFile extension: ${extension}`);
}

exactFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
