

// Exercise 2:

// WRite a javascritp program to find the number of even
// values up to a given number


const countEvenNumbers = (arr) => {
    return arr.filter(num => num %2 === 0).length;
}



// let list = [1, 2, 3, 4, 5, 6, 7, 8 , 2];

// console.log(countEvenNumbers(list))


// exercise 3:
// Create array of numbers
const createArrayOfNumbers = (num) => {
    const newArray = [];
    for(let i=0; i<=num; i++) {
        newArray.push(i);
    }


    return newArray;
}


// console.log(createArrayOfNumbers(10));


// Exercise 4:
// Write a javascript program to get the largest even number from an array of integers.

const largestEven = (arr) => {
    return Math.max(...arr.filter(num => num %2 === 0));
} 


// console.log(largestEven([1, 2, 3, 4, 5, 6, 7, 8, 12, 14, 99,])) 

// Exercise 5:
// Write a javascrit program to replace every character
// in a given string with the character
// following it in the alphabet

const movesCharForward = (str) => {
    return str.split("").map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}


// console.log(movesCharForward("firoz"))

// Exercise 6:
// Write a javascript program to get the current date.
// Expected output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy

const formateDate = (date = new Date()) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`
}

// console.log(formateDate());

// Exercise 6:
// Write a javascript program to create a new
// stringt adding "New!" in front of a given string.
// If the given string begins with "New!" already
// then return the original string.


const stringWithNew = (str) => str.indexOf("New!") === 0 ? str : `New! ${str}`

// console.log(stringWithNew("New! hello"))


// Exercise 7:
// Write a javascript program to create a new string from a given string taking the first
// 3 character and the last 3 characters of a string and adding them
// together. The string length must be 3 or more,
// if not, then the original string is returned.

const newString = (str) => {
    return str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
}

// console.log(newString("firoz"))
// console.log(newString("this is new string"))
// console.log(newString("th"))

// Exercise 8:

// Write a javascript program to extract the first half of a string of even length.

const firstHalf = (str) => str.slice(0, str.length / 2);
// console.log(firstHalf("Firoz"));
// console.log(firstHalf("temple"));
// console.log(firstHalf("Dinosaur"));


// Exercise 9:
// Write a javascript program to concatenate two strings except their first character.

const concatenate = (str1, str2) => str1.slice(1, ) + str2.slice(1, );

// console.log(concatenate("firoz", "akhter"));


// Exercise 10:

// Given two values, write a javascript program to find out which one is nearest to hundred


const closeTo100 = (a, b) => Math.abs((100 - a)) < Math.abs((100 - b)) ?  a : b

// console.log(closeTo100(90, 150));



// Exercise 11:
// Write a javascript program to check a given string
// contains 2 to 4 occuraences of a sepcified character.


const countChars = (str, char) => {
    const count = str.split('').filter(ch => ch === char).length;

    return count >= 2 && count <= 4;

}

// console.log(countChars("firozrrrr", 'o'));

const isLeapYear = (year) => year % 4 === 0 && year % 100 != 0 || year % 400 === 0;

console.log(isLeapYear(2014));
console.log(isLeapYear(2015));
console.log(isLeapYear(2016));
console.log(isLeapYear(2017));
console.log(isLeapYear(2018));
console.log(isLeapYear(2019));








