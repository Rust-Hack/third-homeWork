// 1 task
function getSum(getNumber) {
    var result = 0;
    for(let i = 0; i <= getNumber; i++) {
        result = result + i;
    }
    return result;
}

console.log(getSum(100));

// 2 task
function credit(sumCredit, year) {
    var overpayment = 0;
    var interestRate = 0.17;
    var i = 1;
    while(i <= year) {
        overpayment += sumCredit * interestRate;
        i++;
    }
    return overpayment;
}

console.log(credit(10, 5));

// 3 task
function trimString(string, from, to) {
    from = from - 1;
    to = to - 1;
    var result = '';
    for(let i = from; i <= to; i++) {
        result += string[i];
    }
    return result;
}

console.log(trimString('qwertytrewq', 2, 4));

//4 task
