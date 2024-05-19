function rotArr(arr, num) {
    for (let i = 0; i < num % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(" "));
}

rotArr(["Banana", "Orange", "Coconut", "Apple"], 15);
