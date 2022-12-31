/* ALGOEXPERT ALGORITHM QUESTIONS */


//#region EASY QUESTIONS


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

// another approach
function twoNumberSum(array, targetSum) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    array.sort((a, b) => a - b);
    while (leftIndex < rightIndex) {
        if (array[leftIndex] + array[rightIndex] === targetSum) return [array[leftIndex], array[rightIndex]];
        if (array[leftIndex] + array[rightIndex] > targetSum) rightIndex--;
        if (array[leftIndex] + array[rightIndex] < targetSum) leftIndex++;
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
    let cMap = new Map();
    let chars = string.split('');
    chars.forEach(char => {cMap.set(char, (cMap.get(char) == undefined) ? 1 : cMap.get(char) + 1)});
    let filtered = [...cMap].filter(([k, v]) => v === 1);
    return filtered.length !== 0 ? chars.indexOf(filtered[0][0]) : -1;
}

// another approach
// O(n) time | O(1) space
function firstNonRepeatingCharacter(string) {
    charFrequencies = {};
    for (const letter of string) {
        letter in charFrequencies ? charFrequencies[letter]++ : charFrequencies[letter] = 1;
    }
    for (let index = 0; index < string.length; index++) {
        const c = string[index];
        if(charFrequencies[c] === 1) return index;
    }
    return -1;
}

console.log(firstNonRepeatingCharacter('aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh'));


//#endregion

//#region generate-document 

function generateDocument(characters, document) {
    let cMap = new Map();
    let dMap = new Map();
    characters.split('').forEach(char => { cMap.set(char, cMap.get(char) == undefined ? 1 : cMap.get(char) + 1) });
    document.split('').forEach(char => { dMap.set(char, dMap.get(char) == undefined ? 1 : dMap.get(char) + 1) });

    for (const [key, value] of dMap) {
        if (!cMap.has(key)) return false;
        if (cMap.get(key) < dMap.get(key)) return false;
    }

    return true;
}

console.log(generateDocument('abcabc', 'abc'));

// another approach
// O(m * (n + m)) time | O(1) space - where n is the number
// of characters and m is the length of the document
function generateDocument(characters, document) {
    for (const letter of document) {
        let frequencyInDocument = getFrequency(document, letter);
        let frequencyInCharacters = getFrequency(characters, letter);
        if (frequencyInDocument > frequencyInCharacters) return false;
    }
    return true;

    function getFrequency(str, char) {
        let frequency = 0;
        for (const c of str) {
            if (c === char) frequency++;
        }
        return frequency;
    }
}

// another approach
// O(c * (n + m)) time | O(c) space - where n is the number of characters, m is
// the length of the document, and c is the number of unique characters in the document
function generateDocument(characters, document) {
    const alreadyCounted = new Set();
    for (const letter of document) {
        if (letter in alreadyCounted) continue;
        let frequencyInDocument = getFrequency(document, letter);
        let frequencyInCharacters = getFrequency(characters, letter);
        if (frequencyInDocument > frequencyInCharacters) return false;
        alreadyCounted.add(letter);
    }
    return true;

    function getFrequency(str, char) {
        let frequency = 0;
        for (const c of str) {
            if (c === char) frequency++;
        }
        return frequency;
    }
}


//#endregion

//#region class-photos 

function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);
    let isRedTaller = redShirtHeights[0] > blueShirtHeights[0];
    return redShirtHeights.every((el,ind) => isRedTaller ? el > blueShirtHeights[ind] : el < blueShirtHeights[ind]);
}

let reds = [5,8,1,3,4];
let blues = [6,9,2,4,5];

console.log(classPhotos(reds, blues));

//#endregion

//#region run-length-encoding 

function runLengthEncoding(string) {
    let output = '';
    let count = 1;
    let currentChar = null;
    for (let i = 0; i < string.length; i++) {
        currentChar = string[i];
        if (currentChar === string[i + 1] && count < 9) {
            count++
        } else {
            output += `${count}${currentChar}`;
            count = 1;
        }
    }
    return output;
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'));

//#endregion

//#region tandem-bicycle 

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b)

    return fastest ?
        redShirtSpeeds.reverse().reduce((acc, curr, ind) => acc + Math.max(curr, blueShirtSpeeds[ind]), 0)
        :
        redShirtSpeeds.reduce((acc, curr, ind) => acc + Math.max(curr, blueShirtSpeeds[ind]), 0);
}

// better approach
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => fastest ? b - a)
    return redShirtSpeeds.reduce((acc, curr, ind) => acc + Math.max(curr, blueShirtSpeeds[ind]), 0);
}

let blues = [5, 5, 3, 9, 2];
let reds = [3, 6, 7, 2, 1];

console.log(tandemBicycle(blues, reds, false))

// important: sorting array in descending order
arr.sort((a, b) => b - a)


//#endregion

//#region caesar-cipher-encryptor 

function caesarCipherEncryptor(string, key) {
    let output = '';
    for (const char of string) {
        let charCode = char.charCodeAt(0);
        let isOutRange = charCode + key % 26 > 122;
        isOutRange ? output += String.fromCharCode((charCode + key % 26 - 26)) : output += String.fromCharCode((charCode + key % 26))
    }
    return output;
}

console.log(caesarCipherEncryptor('xyz',2));

//#endregion

//#region find-three-largest-numbers 

function findThreeLargestNumbers(array) {
    let bigTriple = [array[0], array[1], array[2]].sort((a, b) => b - a);
    for (let i = 3; i < array.length; i++) {
        for (let j = 0; j < bigTriple.length; j++) {
            if(array[i] > bigTriple[j]){
                bigTriple.splice(j, 0, array[i]);
                bigTriple.pop();
                break;
            }
        }
    }
    return bigTriple.sort((a, b) => a - b);
}

// better approach
function findThreeLargestNumbers(array) {
    const largest = [array[0], array[1], array[2]];
    for (let i = 3; i < array.length; i++) {
        const minVal = Math.min(...largest);
        if(array[i] > minVal){
            const minIndex = largest.indexOf(minVal);
            largest[minIndex] = array[i]; 
        }
    }
    return largest.sort((a, b) => a - b);
}


let arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

console.log(findThreeLargestNumbers(arr));

//#endregion

//#region product-sum 

function productSum(array, d = 1) {
    let sum = 0;

    for (const item of array) {
        if(typeof item === 'number'){
            sum += item;
        } else {
            sum += productSum(item, d+1);
        }
    }           

    return sum * d;
}

let arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
console.log(productSum(arr));

//#endregion

//#region tournament-winner 

function tournamentWinner(competitions, results) {
    const map = new Map();
    competitions.forEach((el, i) => {
        let winner = competitions[i].at(!results[i]);
        let looser = competitions[i].at(results[i]);
        map.has(winner) ? map.set(winner, map.get(winner) + 3) : map.set(winner, 3);
        map.has(looser) ? map.set(looser, map.get(looser) + 0) : map.set(looser, 0);
    });
    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    return sortedMap.entries().next().value[0];
}

let comp = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML']
];
let results = [0, 0, 1];

console.log(tournamentWinner(comp, results));

//#endregion

//#region non-constructible-change 

function nonConstructibleChange(coins) {
    if (!coins.lentgh) return 1;

    coins.sort((a, b) => a - b);
    let currentSum = 0;
    for (const num of coins) {
        if (num > currentSum + 1) return currentSum + 1;
        currentSum += num;
    }
    return currentSum + 1;
}

let arr = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(arr));

// alternate approach
function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let currentChange = 1;
    const sortCoins = coins.sort((a, b) => a - b)
        .forEach(coin => coin < currentChange + 1 ? currentChange += coin : 0)
    return currentChange;
}


//#endregion

//#region validate-subsequence 

function isValidSubsequence(array, sequence) {
    let seqIndex = 0;
    for (const num of array) {
        if (num === sequence[seqIndex]) seqIndex++;
    }
    return seqIndex === sequence.length;
}

const arr = [5, 1, 22, 25, 6, -1, 8, 10, 10];
const seq = [1, 6, -1, 10];
console.log(isValidSubsequence(arr, seq));

//#endregion

//#region palindrome-check 

// Possibly O(3n) time | O(1) space
function isPalindrome(string) {
    return string === string.split('').reverse().join('');
}

// another approach O(n) time | O(1) space
function isPalindrome(string) {
    let leftIndex = 0;
    let rightIndex = str.length - 1;
    while (rightIndex > leftIndex) {
        if (str[leftIndex] !== str[rightIndex]) return false;
        leftIndex++;
        rightIndex--;
    }
    return true;
}

// another approach O(n) time | O(n) space
function isPalindrome(string) {
    let reversed = [];
    for (let index = str.length - 1; index >= 0; index--) {
        reversed.push(str[index]);
    }
    return reversed.join('') === string;
}

// another approach O(n^2) time | O(n) space
function isPalindrome(string) {
    let reversedString = '';
    for (let index = str.length - 1; index >= 0; index--) {
        reversedString += str[index];
    }
    return reversedString === string;
}

let str = 'abcda';
console.log(isPalindrome(str));

//#endregion


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

// sorting maps on value
const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

//#endregion

//#region Other 

// Get array value at given index
let valAtGivenIndex = array.at(givenIndex);

// checking array length if (array.length < 1)
if(!array.length)

//#endregion

//#region Time Complexity of Javascript array Methods

// Mutator Methods

    // 1. push() - 0(1)
    // Add a new element to the end of the array.

    // 2. pop() - 0(1)
    // Delete the last element of the array

    // 3. shift() - 0(n)
    // Delete the first element of the array

    // 4. unshift() - 0(n)
    // Add one or more elements in the beginning of the array

    // 5. splice() - 0(n)
    // Remove, add or replace a new element indicate by index.

    // 6. sort() - 0(n log(n))
    // Modify the array, ordered by a compare Function.


// Accessor methods

    // 1. concat() - 0(n)
    // Create a new array with the union of two or more arrays.

    // 2. slice() - 0(n)
    // Return a copy of a sub array between two index, start and end.
    // Important Note: if you modify the original array, the value also will be modify in the copy array.

    // 3. indexOf() - 0(n)
    // Return the first index of the element that exists in the array, and if not exists return-1.


// Iteration methods

    // 1. forEach() - 0(n)
    // Just execute a function for each element in the array.

    // 2. map() - 0(n)
    // Create a new array with the result of the callback function (this function is executed for each item same as forEach)

    // 3. filter() - 0(n)
    // Create a new array with the elements that apply the given filter condition as true.

    // 4. reduce() - 0(n)
    // Return a single value after applying the reduction function for each element.


// Other methods

    // 1. some() - 0(n)
    // Return a boolean value as true if found one or more item that apply the given condition, and return false if not (also if the array is empty).
    
    // 2. every() - 0(n)
    // This function Return a boolean value as true if all the items apply the given condition, and false if not.

    // 3. split(del) - O(n*del.length)
    // With an empty delimiter argument, split is essentially equivalent to:

    var len = string.length;
    var result = Array(len)
    for (i = 0; i < len; i++) {
        result[i] = string[i];
    }

    // This is O(len).
    // With a delimiter, it becomes O(string.length * delimiter.length), because at each step in the loop it has to test whether there's a match for delimiter.

    // 4. reverse() - O(n)
    // The reverse() method reverses an array in-place. The first array element becomes the last, and the last array element becomes the first.

    // 5. join() - O(n)
    // The join() method creates and returns a new string by concatenating all of the elements in an array


    // Link: https://javascript.plainenglish.io/under-the-hood-worst-case-complexities-workings-of-popular-js-array-methods-739d5fef314a


//#endregion

//#endregion
