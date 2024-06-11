function calculator() {
    // TODO:

    let calcObj = {
        init(selector1, selector2, resultSelector) {
            this.num1Ref = document.querySelector(selector1);
            this.num2Ref = document.querySelector(selector2);
            this.resultRef = document.querySelector(resultSelector);
        },
        add() {
            this.resultRef.value =
                Number(this.num1Ref.value) + Number(this.num2Ref.value);
        },
        subtract() {
            this.resultRef.value =
                Number(this.num1Ref.value) - Number(this.num2Ref.value);
        },
    };

    return calcObj;
}
