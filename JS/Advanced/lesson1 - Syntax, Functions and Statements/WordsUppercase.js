function toUppercase(input) {
    let regex = /[\w]+/gm;

    let arr = input.match(regex);
    let arrUpper = arr.map((element) => element.toUpperCase());
    console.log(arrUpper.join(", "));
}

toUppercase("Hi, how are you?");
