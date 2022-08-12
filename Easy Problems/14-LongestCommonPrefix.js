
const strs = ["flower","flow","flight"];

// Best Approach 
// var longestCommonPrefix = function(strs) {
//     'use strict';
//     if (strs === undefined || strs.length === 0) { return ''; }
    
//     return strs.reduce((prev, next) => {
//         let i = 0;
//         while (prev[i] && next[i] && prev[i] === next[i]) i++;
//         return prev.slice(0, i);
//     });
// };

var longestCommonPrefix = function(strs) {
    let prefix = '';
    if (strs === undefined || strs.length === 0) return prefix;

    let mostShortStr = Math.min(...strs.map(str => str.length));
    for (let index = 0; index < mostShortStr; index++) {
        let letter = strs[0][index]; // compare every element with first element
        if(strs.every(str => str[index] === letter)){
            prefix += letter;
        }
        else{
            break;
        }
    }
    return prefix;
};


console.log(longestCommonPrefix(strs));

/*
    Edge cases:

    console.log(longestCommonPrefix([]));

    console.log(longestCommonPrefix(['flow']));

    let undefinedArray;
    console.log(longestCommonPrefix(undefinedArray));

    console.log(longestCommonPrefix(['flow','flo','flower','']));


*/