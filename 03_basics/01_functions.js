// how to write function

function sayMyName(){
    console.log("chandan");
}
// call 
sayMyName()    // sayMyName => referance , sayMyName() => execution

 function addTwoNumber(num1, num2){    // (num1, num2) => num1 & num2 are parameter.
//     console.log(num1 + num2)
 }
// const result = addTwoNumber(2, 5)  // 7   (2, 5) => here 2 and 5 is argument.
// addTwoNumber(2, "5")  // 25  
// addTwoNumber(2, null) // 2
// addTwoNumber(2, "a")  // 2a

// const result = addTwoNumber(2, 5)  
// console.log("Result: ",result);  // undefined


function addTwoNumber(num1, num2){    // (num1, num2) => num1 & num2 are parameter.

    // let result = num1 + num2
    // return result;                   // after return statement not execute anything.
    // console.log("chandan")  //not executed.
    return num1 + num2
}
const result = addTwoNumber(2, 5)

// console.log("Result: ",result);

// type of argument takeing

function logUserMessage(username = "subu"){   // default value
    if(username === undefined){    // if(!undefined)
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}
// console.log(logUserMessage("chandan"))  // 
// console.log(logUserMessage(""))         // return just logged in
// console.log(logUserMessage())           // return undefined just logged in.


// different type to pass parameter

function calculateCartPrice(val1, val2, ...num1){   // rest operator => when we pass only rest operator it combine all and return an array [ 2, 100, 15, 65, 78 ].  BUT when we pass the val1,val2 it return the rest of the val1 & val2 like [ 15, 65, 78 ].
    return num1
}

// console.log(calculateCartPrice(2,100,15, 65, 78))   


// Pass Object in function
const user = {
    username: "subrat",
    prices: 985,
    age: 25,
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} price is ${anyobject.price}`)
}

// handleObject(user)   //in function call we have ot pass argument (object name)


// Different type to pass object in the function

handleObject({
    username: "subu",
    price: 985,
})


// Different type to pass array in the function

const myNewArray = [200, 300, 650, 900]

function returnSecondValue(getArray){
    return getArray[2]
} 

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 300, 650, 900]));   // direct pass value