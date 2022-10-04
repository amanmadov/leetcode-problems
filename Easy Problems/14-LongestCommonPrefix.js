/*

Leetcode 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""

Explanation: There is no common prefix among the input strings.

Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.

*/

const strs = ["flower","flow","flight"];

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

// Best Approach 

/*
var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};
*/



/*
    Edge cases:

    console.log(longestCommonPrefix([]));

    console.log(longestCommonPrefix(['flow']));

    let undefinedArray;
    console.log(longestCommonPrefix(undefinedArray));

    console.log(longestCommonPrefix(['flow','flo','flower','']));

*/