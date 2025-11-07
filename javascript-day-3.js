

// Exercise 1:
// Write a javascript program to compare two objects
// to determine if the first one contains the same
// properties as the second one (which may also have additional properties)



const objA = {a: 1, b: 2, c: 3};
const objB = {a: 1, b: 2, c: 3};
const objC = {a: 1, b: 2, d: 1};


const isObjSame = (obj1, obj2) => Object.keys(obj1).every(key => obj2[key]);


// console.log(isObjSame(objA, objB));
// console.log(isObjSame(objA, objC));
// console.log(isObjSame(objB, objC));



// Exercise 2:

// Write a JavaScript program to convert a comma-separated values (CVS)
// string to a 2d array. A new line indicates a new row in the array.

const parseCSV = (csvString) => csvString.split('\n').map(row => row.split(','));

const str = `abc, def, ghi
jkl, mno, pqr
stu, wer, yzs`


// console.log(parseCSV(str));

// Exercise 3:
// Write a Javascript program to generate a random hexadecimal color code.

const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () => '#' + Array.from({length: 6}).map(getRandomHexNumber).join('');

// console.log(getRandomHexNumber());
// console.log(getRandomHexColor());


// Exercise 5:
// Write a javascript function that returns true if
// the provided predicate function returns true for
// all elements in a collection, false otherwise.

const isEveryElem = (arr, fn) => arr.every(elem => fn(elem));
// console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 0));
// console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 3));


// Exercise 6
// Write a javascript function that returns a 
// passed string with letters in alphabetical order.

const alphabetOrder = (str) => str.split('').sort((a, b) => a > b ? 1 : -1).join('');

// console.log(alphabetOrder("weroisdfljasdf"))



// Exercise 7:
// Write a javascript function that accepts a
// string as a parameter and counts the number
// of vowels within the string.

const counterVowels = (str, letters = ['a', 'e', 'i', 'o', 'u']) => str.split('').filter(ch => letters.indexOf(ch) > -1).length;

// console.log(counterVowels("firoz akhter"))
// console.log(counterVowels("Misbah"))


// Exercise 8:
// Write a javascript function to convet an amount to coins.
// Examples input: 46 and possible coins 25, 10, 5, 2
// Output : 25, 10, 10 1


const countCouns = (money, coins = [25, 10, 5, 2, 1]) => {
    const totalCoins = [];

    for(let i=0; i<coins.length; i++) {
        const currentCoinNum = Math.floor(money/coins[i]);
        for(let y=0 ; y<currentCoinNum; y++) {
            totalCoins.push(coins[i]);
        }
        money -= coins[i] * currentCoinNum;
    }


    return totalCoins;
}

// console.log(countCouns(46))



