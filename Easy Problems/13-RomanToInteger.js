/*

Leetcode 13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.


Example 1:
    Input: s = "III"
    Output: 3
    Explanation: III = 3.

Example 2:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.

Example 3:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
Constraints:
    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].

*/



// Best approach

const romantoInt = (s) => {

    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let currentRoman = s[i];
        let nextRoman = s[i + 1];

        if(map[currentRoman] < map[nextRoman]){
            total += map[nextRoman] - map[currentRoman];
            i++;
        }
        else{
            total += map[currentRoman];
        }
    }
    return total;
}


// const romantoInt = (str) => {
//     const map = new Map(
//         [["I",1],["IV",4],["V",5],["IX",9],["X",10],
//         ["XL",40],["L",50],["XC",90],["C",100],
//         ["CD",400],["D",500],["CM",900],["M",1000]]
//     );
//     if(map.has(str)) return map.get(str);
//     let arr = str.split('');
//     let acc = 0;

//     while(arr.length !== 0){
//         let pair = arr.slice(0,2).join('');
//         if(map.has(pair)){
//             acc = acc + map.get(pair);
//             arr.splice(0,2);
//         }
//         else{
//             acc = acc + map.get(arr[0]);
//             arr.splice(0,1);
//         }
//     }
//     return acc;
// }


// Tests:

console.log(romantoInt('LVIII'))
// console.log(romantoInt('MCMXCIV'))
// console.log(romantoInt('I'))
// console.log(romantoInt('IV'))
// console.log(romantoInt('V'))
// console.log(romantoInt('X'))
// console.log(romantoInt('C'))
// console.log(romantoInt('M'))
// console.log(romantoInt('CD'))
