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

const user = {
  name: "ROHIT",
  age: 20,
  emailId: "example@gmail.com",
  amount: 3400,
  address: {
    city: "Varanasi",
    state: "Uttar Pradesh",
  },
  // greet: function () {
  //   console.log("greetings..");
  // },
};

// const user2 = structuredClone(user);

// user2.address.city = "Mau";

console.log(user);
// console.log(user2);
