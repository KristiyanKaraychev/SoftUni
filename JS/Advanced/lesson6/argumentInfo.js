function argumentInfo(...args) {
    argObj = {};

    for (const arg of args) {
        console.log(`${typeof arg}: ${String(arg)}`);

        if (!!argObj[typeof arg]) {
            argObj[typeof arg] += 1;
        } else {
            argObj[typeof arg] = 1;
        }
    }

    let sortedArgs = Object.entries(argObj).sort((a, b) => b[1] - a[1]);
    sortedArgs.forEach((e) => console.log(e.join(" = ")));
}

argumentInfo(
    "cat",
    42,
    function () {
        console.log("Hello world!");
    },
    42,
    "aaaa"
);
