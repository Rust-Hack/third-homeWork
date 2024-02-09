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
function getSumNumbers(num) {
    num = String(num);
    var result = 0;
    for(let i = 0; i < num.length; i++) {
        result += Number(num[i]);
    }
    return result;
}

console.log(getSumNumbers(2021));

//5 task
function getSum(a, b) {
    var result = 0;
    if(a < b) {
        for(let i = a; i <= b; i++) {
            result += i;
        }
    } else {
        for(let i = b; i <= a; i++) {
            result += i;
        }
    }
    return result;

}

console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));

//6 task
function fooBoo(boolean, foo, boo) {
    switch(boolean) {
        case true:
            return foo;
            break;
        default:
            return boo;
    }
    
    // второй вариант решения
    // if(boolean) {
    //     return foo;
    // } else {
    //     return boo;
    // }
}

console.log(fooBoo(true,'правда', 'ложь'));

//7 task
function isTriangle(a, b, c) {
    var result = false;
    if(a + b > c && a + c > b && b + c > a){
        result = true;
    }
    return result;
}

console.log(isTriangle(3, 2, -2));
console.log(isTriangle(3, 2, 2));