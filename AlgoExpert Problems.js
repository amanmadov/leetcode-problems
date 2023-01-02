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

// alternate approach
// O(nlog(n)) time | O(1) space - where n is the number of students
function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);

    for (let index = 0; index < redShirtHeights.length; index++) {
        if (redShirtHeights[0] > blueShirtHeights[0]) {
            if (redShirtHeights[index] <= blueShirtHeights[index]) return false;
        } else {
            if (redShirtHeights[index] >= blueShirtHeights[index]) return false;
        }
    }

    return true;
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

// alternate approach O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
    const newLetters = [];
    const newKey = key % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (const letter of string) {
        newLetters.push(getNewLetter(letter,newKey,alphabet));
    }
    return newLetters.join('');

    function getNewLetter(letter, key, alphabet) {
        const newLetterCode = alphabet.indexOf(letter) + key;
        return alphabet[newLetterCode % 26];
    }
}

console.log(caesarCipherEncryptor('xyz',2));

//#endregion

//#region find-three-largest-numbers 

// O(n^2) time | O(n) space
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

// alternate approach 
// O(n) time | O(1) space complexity
function findThreeLargestNumbers(array) {
    const bigTriple = [null, null, null];
    for (const num of array) {
        compareNum(bigTriple, num);
    }

    function compareNum(arr, num) {
        if (bigTriple[2] === null || bigTriple[2] < num) {
            relocateNum(bigTriple, 2, num);
            return;
        }

        if (bigTriple[1] === null || bigTriple[1] < num) {
            relocateNum(bigTriple, 1, num);
            return;
        }


        if (bigTriple[0] === null || bigTriple[0] < num) {
            relocateNum(bigTriple, 0, num);
            return;
        }
    }

    function relocateNum(arr, index, number) {
        for (let i = 0; i <= index; i++) {
            i === index ? arr[i] = number : arr[i] = arr[i + 1];
        }
    }

    return bigTriple;
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

// alternate approach O(n) time | O(k) space where k is the number of teams
function tournamentWinner(competitions, results) {
    const HOME_TEAM_WON = 1;
    let currentBestTeam = '';
    const scores = {};

    for (let index = 0; index < competitions.length; index++) {
        const result = results[index];
        const [homeTeam, awayTeam] = competitions[index];
        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
        updateScores(winningTeam, 3, scores);
        
        if(scores[winningTeam] > scores[currentBestTeam]) currentBestTeam = winningTeam;

        return currentBestTeam;

        function updateScores(team, points, scores) {
            (!(team in scores)) ? scores[team] = 0 : scores[team] += points;
        }
    }
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

//#region sorted-squared-array 

function sortedSquaredArray(array) {
    return array.map(el => el * el).sort((a, b) => a - b);
}

// alternate approach O(n) time | O(n) space 
function sortedSquaredArray(array) {
    const squared = new Array(array.length).fill(0);
    let smallValueIndex = 0;
    let largeValueIndex = array.length - 1;

    for (let index = array.length - 1; index >= 0; index--) {
        let small = array[smallValueIndex];
        let large = array[largeValueIndex];

        if (Math.abs(small) > Math.abs(large)) {
            squared[index] = small * small;
            smallValueIndex++;
        } else {
            squared[index] = large * large;
            largeValueIndex--;
        }
    }

    return squared;
}



//#endregion

//#region nth-fibonacci 

// O(2^n) time | O(n) space
function getNthFib(n) {
    return getFib(n-1);
    function getFib(num) {
        if (num === 0) return 0;
        if (num === 1) return 1;
        return getFib(num - 1) + getFib(num - 2)
    }
}

// alternate approach 
// O(n) time | O(n) space
function getNthFib(n, fibObject = { 1: 0, 2: 1 }) {
    if (n in fibObject) return fibObject[n];
    fibObject[n] = getNthFib(n - 1, fibObject) + getNthFib(n - 2, fibObject);
    return fibObject[n];
}

// alternate approach 
// O(n) time | O(1) space
function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
        let next = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = next;
        counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}

console.log(getNthFib(6));

//#endregion


//#endregion


//#region JS Additional Notes 

//#region Implementation of Maps in JS

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

// Checking if an object has a given property using in operator
// 'myProp' in object also determines whether myProp property exists in object.

const hero = {
  name: 'Batman'
};

'name' in hero;     // => true
'realName' in hero; // => false

//#endregion

//#region Time Complexity of Javascript Data Structures

// For all JS developers, whether you are working professionally or trying to crack the
// much feared coding interview, using in-built array methods like .filter(), .reduce(),
// .map(), etc. is second nature to us.

// These methods introduce a level of abstraction which makes the code 
// easier to read and much simpler and faster to write.

// But have you ever wondered what the worst time and space complexities (Big O) 
// of such methods are or how they work? They may look like simple one-liners, 
// but a lot goes under the hood.

// There is no specified time complexity guarantee for any array operation. 
// How arrays perform depends on the underlying data structure the engine chooses. 
// Engines might also have different representations, and switch between them depending on certain heuristics. 

// The array operations are almost always optimized to run according to the runtime engine it represents.

// Big O notation is a means to compare the efficiency of different approaches to a problem. 
// It’s not the only way to test how long an algorithm takes to run, but it’s the most common and we will stick to it in this article.
// As we explained, Big O notation is a way to measure the time it will take an algorithm to run and the space in memory that a calculation will take, 
// that stays consistent regardless of the user’s device.

// How Do We Assert the Time Complexity?
// Instead of taking the time with a stopwatch or setting a time out function, we focus on counting the number of steps or mathematical operations 
// needed for the completion of a particular algorithm, because that will always remain fixed.

// Let’s talk about this calculation we mentioned. Counting the steps is not enough. 
// The number of elements we iterate over can affect the number of actions we will take and so the count itself. 
// As the input grows, so can the runtime of the algorithm.

// Constant Time Complexity O(1) means only one step is counted. 
// Well, not necessarily one, any constant number, could be 1, 5 or 30. 
// What’s important is that it stays constant regardless of the input size, no matter how large or small it is.

// Linear Time Complexity O(n) means we will need to make the calculation constant number of times for each element 
// (when n is the number of elements) so as the input grows, the runtime grows.


//#region Time Complexity of JS Map

// 1. We can assume good hash table implementations have practically O(1) time complexity.
// 2. Here is a blog posted by V8 team explains how some memory optimization was done on its hashtable 
//    implementation for Map, Set, WeakSet, and WeakMap: Optimizing hash tables: hiding the hash code
//    Link: https://v8.dev/blog/hash-code

// Based on 1 and 2: V8's Set and Map's get & set & add & has time complexity practically is O(1).

//#endregion

//#region Time Complexity of JS Array Methods 

    // push() - 0(1)
    // Add a new element to the end of the array.

    // pop() - 0(1)
    // Delete the last element of the array

    // shift() - 0(n)
    // Delete the first element of the array

    // unshift() - 0(n)
    // Add one or more elements in the beginning of the array

    // splice() - 0(n)
    // Remove, add or replace a new element indicate by index.

    // slice() - O(n)
    // The slice() method returns a shallow copy of a portion of an array into a new array object

    // sort() - 0(n log(n))
    // Modify the array, ordered by a compare Function.
    // For bigger arrays, quicksort is usually used to sort the array.

    // toString() - O(n)
    // The toString() method returns a string representing the specified array and its elements.[10]

    // concat() - 0(n)
    // Create a new array with the union of two or more arrays.

    // slice() - 0(n)
    // Return a copy of a sub array between two index, start and end.
    // Important Note: if you modify the original array, the value also will be modify in the copy array.

    // indexOf() - 0(n)
    // Return the first index of the element that exists in the array, and if not exists return-1.

    // forEach() - 0(n)
    // Just execute a function for each element in the array.

    // map() - 0(n)
    // Create a new array with the result of the callback function (this function is executed for each item same as forEach)

    // filter() - 0(n)
    // Create a new array with the elements that apply the given filter condition as true.

    // reduce() - 0(n)
    // Return a single value after applying the reduction function for each element.

    // some() - 0(n)
    // Return a boolean value as true if found one or more item that apply the given condition, and return false if not (also if the array is empty).
    
    // every() - 0(n)
    // This function Return a boolean value as true if all the items apply the given condition, and false if not.

    // split(del) - O(n*del.length)
    // With an empty delimiter argument, split is essentially equivalent to:

    var len = string.length;
    var result = Array(len)
    for (i = 0; i < len; i++) {
        result[i] = string[i];
    }

    // This is O(len).
    // With a delimiter, it becomes O(string.length * delimiter.length), because at each step in the loop it has to test whether there's a match for delimiter.

    // reverse() - O(n)
    // The reverse() method reverses an array in-place. The first array element becomes the last, and the last array element becomes the first.
    const arr = [1, 2, 3];
    const reversed = arr.reverse()

    // join() - O(n)
    // The join() method creates and returns a new string by concatenating all of the elements in an array

    // at() - O(1)
    // The method does not iterate through the array to get the element. 
    // It uses the index given directly.

    const arr = [10, 20, 30, 40]
    console.log(arr.at(1))

    // concat() - O(n)
    // The concat() method is used to merge two or more arrays which returns a shallow-copied new array.

    const arr1 = ['Hello', 'World', 'JS'];
    const arr2 = [1, 2, 3];
    const arr3 = arr1.concat(arr2);

    // entries() - O(n)
    // The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

    // find() - O(n)
    // The find() method returns the first element in the provided array that satisfies the provided testing function.

    // from() - O(n)
    // The Array.from() static method creates a new, shallow-copied Array instance from an iterable

    // includes() - O(n)
    // The includes() method checks whether a value or element exists in the array and returns true or false

    // … (spread syntax) - O(n)
    // The spread syntax(...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments 
    // (for function calls) or elements (for array literals) are expected.

    const arr = [1, 2, 3];
    const arr2 = [...arr];

    // Link: https://javascript.plainenglish.io/under-the-hood-worst-case-complexities-workings-of-popular-js-array-methods-739d5fef314a

//#endregion


//#endregion

//#endregion
