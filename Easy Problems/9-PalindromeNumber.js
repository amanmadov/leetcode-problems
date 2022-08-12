var isPalindrome = function (x) {
    const arr = Array.from(String(x), Number);
    
    const isNegative = arr[0] === '-';
    const isSingleDigit = arr.length === 1

    if (isNegative) return false;
    if (isSingleDigit) return true;

    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        if (arr[l] !== arr[r]) return false;
        l++; r--;
    }
    return true;
};

// Alternative approach
var isPalindrome = function(x) {
    if(x < 0 || x % 10 === 0 && x !== 0) return false
    
    let num = x
    let rev_x = 0
    
    while(x > 0){
        let digit = Math.floor(x % 10)
        rev_x = Math.floor(rev_x * 10 + digit)
        x = Math.floor(x / 10)
    }
    return num === rev_x
};


const x = 12321;
console.log(isPalindrome(x));


// const foo = (num,rev = 0) => {
//     if(num === 0) return rev;
//     rev = rev * 10 + num % 10;
//     num = Math.floor(num / 10);
//     return foo(num,rev);
// }

// const bar = n => n === foo(n);

