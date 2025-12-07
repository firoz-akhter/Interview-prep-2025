// const user = {
//   name: "ROHIT",
//   age: 20,
//   emailId: "example@gmail.com",
//   amount: 3400,
// };

// const res = Object.keys(user);
// const res2 = Object.values(user);
// const res3 = Object.entries(user)

// console.log(res)
// console.log(res2)
// console.log(res3)

// now we will interate over the object

// for(let keys in user) {
//     console.log(keys, user[keys])
// }

// array destructuring

// let arr = [1, 2, 3, 4, 5];

// const [first, second] = arr;

// console.log(first, second)

// object destructuring

// const {name: username, age: userAge, amount}= user;

// console.log(username, userAge, amount);

// for of loop sirf arr pe laga sakte hai
// to object se array bana lenge simple

// for(let values of Object.values(user)) {
//     console.log(values)
// }

// now I want to get both key and value
// Object.entries

// for(let values of Object.entries(user)) {
//     console.log(values)
// }

// for(let values of Object.entries(user)) {
//     console.log(values[0], values[1])
// }

// for (let [key, value] of Object.entries(user)) {
//   console.log(key, value);
// }

// const user = {
//   name: "ROHIT",
//   age: 20,
//   emailId: "example@gmail.com",
//   amount: 3400,
//   address: {
//     city: "Varanasi",
//     state: "Uttar Pradesh",
//   },
//   // greet: function () {
//   //   console.log("greetings..");
//   // },
// };

// const user2 = structuredClone(user);

// user2.address.city = "Mau";

// console.log(user);
// console.log(user2);

// forEach, filter, map, reduce

// let arr = [10, 20, 30, 5, 90, 87];

// let sum = 0;

// arr.forEach((ele) => (sum += ele));

// console.log(sum)

// // filter

// let res = arr.filter((ele) => ele > 25)

// console.log(res)

// // polyfill of filter

// Array.prototype.myFilter = function(compare) {
//     const ans = [];
//     for(let ele of this) {
//         if(compare(ele)) {
//             ans.push(ele);
//         }
//     }
//     return ans;
// }

// let res2 = arr.myFilter((ele) => ele > 25).sort((a, b) => a-b);
// console.log(res2)

// let arr = [10, 20, 30, 5, 90, 87];

// let sum = 0;

// arr.forEach((ele) => (sum += ele));

// console.log(sum)

// // filter

// let res = arr.filter((ele) => ele > 25)

// console.log(res)

// // polyfill of filter

// Array.prototype.myFilter = function(compare) {
//     const ans = [];
//     for(let ele of this) {
//         if(compare(ele)) {
//             ans.push(ele);
//         }
//     }
//     return ans;
// }

// let res2 = arr.myFilter((ele) => ele > 25).sort((a, b) => a-b);
// console.log(res2)

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    inStock: true,
  },
  { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Appliances",
    price: 150,
    inStock: false,
  },
  {
    id: 4,
    name: "Headphones",
    category: "Electronics",
    price: 200,
    inStock: true,
  },
];

const newProducts = products
  .filter((ele) => ele.price > 50)
  .sort((a, b) => a.price - b.price)
  .map((ele) => ({ name: ele.name, price: ele.price }));
console.log(newProducts);
