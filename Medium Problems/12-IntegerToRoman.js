
// Best approach
function intToRoman(num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = '';
    Object.entries(map).forEach(([letter, n]) => {
        result += letter.repeat(Math.floor(num / n));
        num %= n;
    });
    return result;
}



// const getRoman = (num) => {
//     const map = new Map(
//         [[1,"I"],[4,"IV"],[5,"V"],[9,"IX"],[10,"X"],
//         [40,"XL"],[50,"L"],[90,"XC"],[100,"C"],
//         [400,"CD"],[500,"D"],[900,"CM"],[1000,"M"]]
//     );
//     const filtered = [...map.keys()].filter(el => el <= num);
//     const found = filtered[filtered.length-1];
//     return [map.get(found),found];
// }

// const intToRoman = function (s) {
//     let str = '';
//     let divident = s;
//     let divisor,remainder,quotient,c;
//     while (remainder !== 0) {
//         [c, divisor] = getRoman(divident);
//         quotient = Math.floor(divident / divisor);
//         remainder = divident % divisor;
//         str = str + c.repeat(quotient);
//         divident = remainder;
//     }
//     return str;
// };


console.log(intToRoman(12));
console.log(intToRoman(37));
console.log(intToRoman(40));
console.log(intToRoman(112));






