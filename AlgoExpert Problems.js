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




//#region JS Additional Notes 


//#region Maps 

// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. 
// A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. 
// Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into 
// the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).

// Difference between objects and maps:
    // - A Map does not contain any keys by default. It only contains what is explicitly put into it.
    // - A Map is safe to use with user-provided keys and values.
    // - A Map's keys can be any value but the keys of an Object must be either a String or a Symbol.
    // - The keys in Map are ordered in a simple, straightforward way: A Map object iterates entries, keys, and values in the order of entry insertion.
    // - The number of items in a Map is easily retrieved from its size property.
    // - A Map is an iterable, so it can be directly iterated.
    // - Map performs better in scenarios involving frequent additions and removals of key-value pairs.


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b'); // removes the specified element from a Map object by key.

console.log(map1.size);
// expected output: 2

map1.clear(); // removes all elements from a Map object.

const map2 = new Map();

map2.set('0', 'foo');
map2.set(1, 'bar');

const iterator1 = map2.entries();

// The entries() method returns a new iterator object that contains the [key, value] pairs for each element in the Map object in insertion order. 
// In this particular case, this iterator object is also an iterable, so the for-of loop can be used. 

console.log(iterator1.next().value);
// expected output: ["0", "foo"]

console.log(iterator1.next().value);
// expected output: [1, "bar"]

map2.set('bar', 'foo');

console.log(map2.has('bar'));
// expected output: true

console.log(map2.has('foo'));
// expected output: false

const iteratorKeys = map1.keys();
// The keys() method returns a new iterator object that contains the keys for each element in the Map object in insertion order.

const iteratorValues = map1.values();
// The values() method returns a new iterator object that contains the values for each element in the Map object in insertion order.

//#endregion


//#endregion