

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





const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// Exercises

// 1) What is the average income of all the people in the array?

const averageSalary = people.reduce((acc, person) => acc += parseInt(person.salary), 0)

// console.log(averageSalary/ people.length) ; 


// 2) Who are the people that are currently older than 30?

const moreThan30 = people.filter((person) => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30);

// console.log("more than 30", moreThan30); // have some issue in this morethan30
// console.log(new Date().getFullYear())
// console.log(new Date().getFullYear(parseInt(people[0].DOB)))
// console.log(parseInt(people[1].DOB))

// 3) Get a list of the people's full name (firstName and lastName).

const fullNameList = people.map((person) => person.firstName + " " + person.lastName);
const fullNameList2 = people.map((person) => `${person.firstName} ${person.lastName}`);
// console.log(fullNameList);
// console.log(fullNameList2);


// 4) Get a list of people in the array ordered from youngest to oldest.

const shortByAge = people.sort((a, b) => new Date(a.DOB) > new Date(b.DOB) ? 1 : -1)

// console.log(shortByAge);

// 5) How many people are there in each department?







const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.

const undeliveredItemOf234 = orders.filter((order) => order.customerId === '234' && order.delivered === false);
// console.log(undeliveredItemOf234);


// 2) Create a new property on each order with the total price of items ordered.

const ordersWithTotalPrice = orders.map((order) => ({...order, totalPrice: order.items.reduce((acc, item) => acc += item.price, 0)}));

// console.log(ordersWithTotalPrice);

// 3) Have all the orders been delivered?

const isAllOrderDelivered = orders.every((order) => order.delivered);
// console.log(isAllOrderDelivered);

// 4) Has the customer with ID '123' made any orders?

const orderById123 = orders.some(order => order.customerId === '567')
// console.log(orderById123);


// 5) Have any products with an id of 123 been sold?







// const users = [
//     { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
//     { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
//     { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
//     { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
//     { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
//     { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
//     { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
//     { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
//     { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
//     { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
// ];

const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];


// Exercises


// 1) What is Madison Marshall's user id?


const madisonMarshallUser = users.find((user) => user.firstName === "Madison" && user.lastName === "Marshall");
// console.log(madisonMarshallUser.id)



// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

const firstCommentUser = users.find((user) => user.id === comments[0].userId);
// console.log(firstCommentUser)


// 3) Which user commented 'OK great thanks'?

const userWithOkGreatThanks = users.find((user) => user.id === comments.find((comment) => comment.text === "OK great thanks").userId).id
// console.log(userWithOkGreatThanks);


// 4) Add the user's first and last name to each comment in the comments array

// const comments2 = comments.map((comment) => ({...comment, firstName: users.find((user) => user.id === comment.userId).firstName, lastName: users.find((user) => user.id === comment.userId).lastName}))
// console.log(comments2)

const comments2 = comments.map(comment => {
    const {firstName, lastName} = users.find((user) => user.id === comment.userId);
    return {...comment, firstName, lastName}
})
// console.log(comments2)


// 5) Get a list of the users who haven't commented

const userWithNoComments = users.filter((user) => !comments.find((comment) => comment.userId === user.id));
console.log(userWithNoComments);






const users = [{
    id: "e0aafb31-8ac6-48d4-99ee-12af8ddcbdae",
    email: "tcasaletto0@soundcloud.com",
    ip_address: "53.215.156.73"
  }, {
    id: "a7b0221d-5228-4992-a964-b5f3e3d7a022",
    email: "nmoffett1@paginegialle.it",
    ip_address: "34.81.219.4"
  }, {
    id: "1019b52c-db9d-45a2-975f-404455925a6a",
    email: "rcrampin2@yale.edu",
    ip_address: "65.181.114.151"
  }, {
    id: "e8637c3b-645d-4742-a463-d2006742606f",
    email: "ddreinan3@smugmug.com",
    ip_address: "136.171.217.116"
  }, {
    id: "a20803f2-c372-4f39-97b1-d8e948151c8c",
    email: "gdorkin4@taobao.com",
    ip_address: "220.228.4.97"
  }, {
    id: "63f8e789-009d-4e7b-ad6b-cc8c8a1d1248",
    email: "vhucquart5@typepad.com",
    ip_address: "101.212.0.49"
  }, {
    id: "74120248-03b5-4888-84c0-d1a459c6273b",
    email: "vsircombe6@marriott.com",
    ip_address: "28.180.205.167"
  }, {
    id: "412a0669-7171-48b4-95eb-e898993ec1dc",
    email: "kdesouza7@t.co",
    ip_address: "61.44.195.62"
  }, {
    id: "6cd04ecc-8316-4542-9faa-b8438e82b4ad",
    email: "sbehnke8@booking.com",
    ip_address: "1.176.238.27"
  }, {
    id: "cfdf5009-84d3-4599-88c0-048c4fcae2ed",
    email: "clindsell9@nymag.com",
    ip_address: "44.37.119.76"
  }];
  
/**
 * Exercise 01
 * 
 * Check whether every email address in the list of users is valid (get a true or false value)
 */






/**
 * Exercise 02
 * 
 * Find out how many users have an IP address in a Class A network
 * https://en.wikipedia.org/wiki/Classful_network
 */






/**
 * Exercise 03
 * 
 * Find the position in the array of the first  user object that has a Class B IP address
 */






/**
 * Exercise 04
 * 
 * Find the user object that has the 'soundcloud' email address
 */






/**
 * Exercise 05
 * 
 * Replace all the items in the array with a string value of 'deleted'
 */






