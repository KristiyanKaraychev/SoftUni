function secondProblem(input) {
    msg_num = parseInt(input.shift());
    let msg_regex =
        /^([$|%])(?<tag>[A-Z]{1}[a-z]{2,})\1: \[(?<number1>[0-9]+)\]\|\[(?<number2>[0-9]+)\]\|\[(?<number3>[0-9]+)\]\|$/;

    for (let i = 0; i < msg_num; i++) {
        if (msg_regex.test(input[i])) {
            let valid_msg = msg_regex.exec(input[i]);
            let decrypted_msg = "";

            for (let [key, value] of Object.entries(valid_msg.groups)) {
                if (key !== "tag") {
                    decrypted_msg += String.fromCharCode(Number(value));
                }
            }

            console.log(`${valid_msg.groups.tag}: ${decrypted_msg}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}

secondProblem([
    "3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true",
]);
