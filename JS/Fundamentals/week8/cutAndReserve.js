function cutAndReserve(input) {
    let firstHalf = input.slice(0, input.length / 2);
    let secondHalf = input.slice(input.length / 2);
    let firstHalfReversed = "";
    let secondHalfReversed = "";

    for (let i = firstHalf.length - 1; i >= 0; i--) {
        firstHalfReversed += firstHalf[i];
        secondHalfReversed += secondHalf[i];
    }

    console.log(firstHalfReversed);
    console.log(secondHalfReversed);
}

cutAndReserve("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
