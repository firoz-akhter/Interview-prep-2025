

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








