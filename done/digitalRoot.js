// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single - digit number is produced.
// The input will be a non - negative integer.

//  16  -->  1 + 6 = 7
//  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    const toArray = (num)=> num.toString().split("");
    const digitSum =(num)=> toArray(num)
        .reduce((a, b) => parseInt(a) + parseInt(b));
    
    if (toArray(n).length === 1) {
        return n
    }

    let sum;

    if (toArray(n).length > 1) {
        sum = digitSum(n);
    }

    while (toArray(sum).length > 1) {
        sum = digitSum(sum)
    }

    return sum 
}


console.log(digital_root(16))
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));