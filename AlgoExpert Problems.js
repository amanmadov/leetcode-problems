/* ALGOEXPERT ALGORITHM QUESTIONS */


//#region EASY 


//#region two-number-sum

// Be carefull using foreach
// Return statement inside forEach DOES NOT break iteration
// Function below WILL NOT work
function hatali(array, targetSum) {
    let mySet = new Set();
    array.forEach(el => {
        let diff = targetSum - el;
        console.log(el, diff, mySet.has(diff));
        if (mySet.has(diff)) return [el, diff];
        mySet.add(el);
    });
    return [];
}

function twoNumberSum(array, targetSum) {
    let mySet = new Set();
    for (const num of array) {
        let diff = targetSum - num;
        if (mySet.has(diff)) return [num, diff];
        mySet.add(num);
    }
    return [];
}

let arr = [3, 5, -4, 8, 11, 1, -1, 6];
let target = 10;
console.log(twoNumberSum(arr, target));

// Additional Notes:
// If indexes are asked use Map

//#endregion

//#region first-non-repeating-character 

function firstNonRepeatingCharacter(string) {
    if(string.length === 0) return -1;
    let maps = new Map();
    let chars = string.split('');
    chars.forEach(char => {
        maps.set(char, (maps.get(char) == undefined) ? 1 : maps.get(char) + 1);
    });
    let filtered = [...maps].filter(([k, v]) => v === 1);
    return filtered.length !== 0 ? chars.indexOf(filtered[0][0]) : -1;
}

console.log(firstNonRepeatingCharacter('aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh'));


//#endregion

//#region generate-document 

function generateDocument(characters, document) {
    let cMap = new Map();
    let dMap = new Map();
    characters.split('').forEach(char => {cMap.set(char, cMap.get(char) == undefined ? 1 : cMap.get(char) + 1)});
    document.split('').forEach(char => {dMap.set(char, dMap.get(char) == undefined ? 1 : dMap.get(char) + 1)});

    for (const [key, value] of dMap) {
        if (!cMap.has(key)) return false;
        if (cMap.get(key) < dMap.get(key)) return false;
    }

    return true;
}

console.log(generateDocument('abcabc','abc'));

//#endregion


//#endregion



//#region MEDIUM 



//#endregion

//#region HARD 



//#endregion

