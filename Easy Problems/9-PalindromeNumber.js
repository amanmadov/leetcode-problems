/*

Leetcode 9. Palindrome Number

Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
 
Example 1:
    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
    

Constraints:
    -231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?

*/


/*

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

*/

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

