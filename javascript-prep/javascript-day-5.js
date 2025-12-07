// Write a JavaScript program to list the properties of a JavaScript object.

// Sample object:
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// // Sample Output: name,sclass,rollno

// for (let ele of Object.keys(student)) {
//   console.log(ele);
// }

// const objLength = Object.keys(student).length;
// console.log(objLength);

// object in javascript doesn't have any obj.length proprety so we will convert it first in array then do arr.length
// Object.keys(student).length

// Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of the following books.

// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (item of library) {
//   console.log(
//     `author: ${item.author}, bookName: ${item.title}, readingStatus: ${item.readingStatus}`
//   );
// }

// 6. Bubble Sort

// Write a bubble sort algorithm in JavaScript.

// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,

// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

// Array.prototype.myBubbleShort = function () {
//   // arr = this

//   for (let i = 0; i < this.length; i++) {
//     for (let j = i + 1; j < this.length; j++) {
//       if (this[i] > this[j]) {
//         // swap
//         let temp = this[i];
//         this[i] = this[j];
//         this[j] = temp;
//       }
//     }
//   }

//   return this;
// };

// let arr = [6, 4, 0, 3, -2, 1];

// let newArr = arr.myBubbleShort();
// console.log(newArr);

// 7. String Subsets

// Write a JavaScript program that returns a subset of a string.

// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

// let data = "dog";

// let subString = [];

// for (let i = 0; i < data.length; i++) {
//   for (let j = i + 1; j < data.length + 1; j++) {
//     subString.push(data.slice(i, j));
//   }
// }

// console.log(subString);

// 10. Sort Object Array

// Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library.sort((a, b) => a.libraryID - b.libraryID);

// console.log(library);

// 15. Object to Key-Value Pairs

// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
// let list = [];

// for ([key, value] of Object.entries(student)) {
//   list.push([key, value]);
// }

// console.log(list);

// 16. Swap Keys and Values

// Write a JavaScript function to get a copy of the object
// where the keys become the values and the values are the keys.

let newObj = {};

// newObj.name = "firoz";
// console.log(newObj);

// for (let item of Object.entries(student)) {
//   newObj[item[1]] = item[0];
// }
// console.log(newObj);

// console.log(student.hasOwnProperty("something"));
