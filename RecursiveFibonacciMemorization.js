const twoNum1 = 0;
const twoExpected1 = 0;

const twoNum2 = 1;
const twoExpected2 = 1;

const twoNum3 = 2;
const twoExpected3 = 1;

const twoNum4 = 3;
const twoExpected4 = 2;

const twoNum5 = 4;
const twoExpected5 = 3;

const twoNum6 = 8;
const twoExpected6 = 21;

// Using memory to declare values for what we already know in the fibonacci sequence, that the 0th key has a value of 0, 1 has 1, etc.

function fibNaiveMemo(n, memo = {0: 0, 1: 1}){
    if(n < 0){
        return null;
    }
    if(memo[n] !== undefined){
        return memo[n];
    }
    memo[n] = fibNaiveMemo(n - 1, memo) + fibNaiveMemo(n - 2, memo);
    return memo[n];
}

console.log(fibNaiveMemo(twoNum1));
console.log(fibNaiveMemo(twoNum2));
console.log(fibNaiveMemo(twoNum3));
console.log(fibNaiveMemo(twoNum4));
console.log(fibNaiveMemo(twoNum5));
console.log(fibNaiveMemo(twoNum6));