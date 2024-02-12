function DepositCalc(input){
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let interestRate = Number(input[2]) / 100;
    let sum = deposit + months * ((deposit * interestRate) / 12);
    console.log(sum);
}

DepositCalc([200,3,5.7]);