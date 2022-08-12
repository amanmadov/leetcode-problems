// Best approach


const romantoInt = (s) => {

    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let currentRoman = s[i];
        let nextRoman = s[i + 1];

        if(map[currentRoman] > map[nextRoman]){
            total += map[currentRoman];
        }
        else{
            total += map[nextRoman] - map[currentRoman];
            i++;
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

console.log(romantoInt('MCMXCIV'))
// console.log(romantoInt('I'))
// console.log(romantoInt('IV'))
// console.log(romantoInt('V'))
// console.log(romantoInt('X'))
// console.log(romantoInt('C'))
// console.log(romantoInt('M'))
// console.log(romantoInt('CD'))
