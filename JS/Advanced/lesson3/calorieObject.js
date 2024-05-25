function calorieObject(arr) {
    let obj = {};

    for (let i = 1; i < arr.length; i += 2) {
        obj[arr[i - 1]] = Number(arr[i]);
    }

    console.log(obj);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
