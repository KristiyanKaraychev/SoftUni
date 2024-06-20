function encodeAndDecodeMessages() {
    console.log("TODO...");

    let buttons = document.querySelectorAll("#main button");
    let textAreas = document.querySelectorAll("#main textarea");
    let encodeButton = buttons[0];
    let decodeButton = buttons[1];
    let encodeTextArea = textAreas[0];
    let decodeTextArea = textAreas[1];

    encodeButton.addEventListener("click", function () {
        let text = encodeTextArea.value;
        let newText = "";

        for (const char of text) {
            let currentChar = char.charCodeAt(0);
            let newChar = String.fromCharCode(currentChar + 1);
            newText += newChar;
        }

        decodeTextArea.value = newText;
        encodeTextArea.value = "";
    });

    decodeButton.addEventListener("click", function () {
        let text = decodeTextArea.value;
        let newText = "";

        for (const char of text) {
            let currentChar = char.charCodeAt(0);
            let newChar = String.fromCharCode(currentChar - 1);
            newText += newChar;
        }

        decodeTextArea.value = newText;
    });
}
