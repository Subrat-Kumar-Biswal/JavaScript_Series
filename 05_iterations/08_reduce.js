// reduce ()

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.


// we can perform any operation



const myNums  = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} currval: ${currval}`);
//     return acc + currval
// }, 0)

// write in arrow function

const myTotal = myNums.reduce( (acc, crr) => acc+crr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemname: "js course",
        price: 2999,
    },
    {
        itemname: "java",
        price: 1599,
    },
    {
        itemname: "python",
        price: 999,
    },
    {
        itemname: "data scientist",
        price: 12999,
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(`The total price is : ${priceToPay}`);