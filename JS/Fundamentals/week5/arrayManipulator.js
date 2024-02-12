function arrayManipulator(arr1, arr2) {
    let array = arr1;
    let commands = arr2;

    for (let command of commands) {
        let splitCommand = command.split(" ");
        let action = splitCommand.shift();

        switch (action) {
            case "add":
                add(array, Number(splitCommand[0]), Number(splitCommand[1]));
                break;
            case "addMany":
                addMany(array, Number(splitCommand[0]), splitCommand);
                break;
            case "contains":
                console.log(contains(array, Number(splitCommand[0])));
                break;
            case "remove":
                remove(array, Number(splitCommand[0]));
                break;
            case "remove":
                remove(array, Number(splitCommand[0]));
                break;
            case "shift":
                shift(array, Number(splitCommand[0]));
                break;
            case "sumPairs":
                array = sumPairs(array);
                break;
            case "print":
                print(array);
                break;
            default:
                break;
        }
    }

    function add(arr, index, element) {
        return arr.splice(index, 0, element);
    }

    function addMany(arr, index, elements) {
        let nums = elements.slice(1);

        for (let n of nums) {
            arr.splice(index, 0, Number(n));
            index++;
        }

        return arr;
    }

    function contains(arr, element) {
        return arr.indexOf(element);
    }

    function remove(arr, index) {
        return arr.splice(index, 1);
    }

    function shift(arr, index) {
        for (let i = 0; i < index; i++) {
            arr.push(arr.shift());
        }
        return arr;
    }

    function sumPairs(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i += 2) {
            if (i === arr.length - 1) {
                newArr.push(arr[i]);
            } else {
                newArr.push(arr[i] + arr[i + 1]);
            }
        }
        return newArr;
    }

    function print(arr) {
        console.log(`[ ${arr.join(", ")} ]`);
    }
}

arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
