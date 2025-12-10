// 3 questions to answer
// write a func total amount of only successful order
// id of highest successfull
// count of failure total order;


let arr = [
    {
        id: 1,
        amount: 250,
        orderSuccess: true,
        totalOrder: 2,
    },
     {
         id: 2,
         amount: 400,
         orderSuccess: true,
         totalOrder: 4,
     },
     {
         id: 3, // failure
         amount: 100,
         orderSuccess: false,
         totalOrder: 0,
     }, 
     {
         id: 4,
         amount: 800,
         orderSuccess: true,
         totalOrder: 8, // this should be our answer in this case
     }, 
     {
         id: 5, // failure
         amount: 50,
         orderSuccess: false,
         totalOrder: 0,
    }
]




let totalSumOfSuccessOrder = arr.filter((item) => item.orderSuccess)
.reduce((acc, item) => {
    return acc += item.amount;
}, 0)
console.log(totalSumOfSuccessOrder)
console.log(250 + 400 + 800)



let id = arr[0].id; // assume this is the order with highest success
let totalOrder = arr[0].totalOrder;
// console.log(id, totalOrder);

for(let i=0; i<arr.length; i++) {
    if(arr[i].totalOrder > totalOrder) {
        id = arr[i].id;
        totalOrder = arr[i].totalOrder;
    }
}

console.log("highest success order id", id)

// total failure order count
let totalCountFailure = arr.filter((item) => item.orderSuccess === false)
.reduce((acc, item) => {
    return acc += 1;
}, 0)
console.log("total failure", totalCountFailure)






