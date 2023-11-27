// const userEmail = 'chan@gmail.com'  // return == got user email
const userEmail = ""    // return = Don't have user email



if(userEmail){
    console.log("got user email");
}else{
    console.log("Don't have user email");
}

// falsy values =>

//  false, 0, -0, BigInt 0n, "", null, undefined, NaN   

// truthy values

// "0", 'false', " ", [], {}, function(){}



//  +++++++++++++ How to check an array is empty

let emptyArray = []

if(emptyArray.length === 0){
    console.log("array is empty");
}

//  +++++++++++++ How to check an array is empty

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): (null , undefined )

let val1;
// val1 = 2 ?? 10   // return - 2
// val1 = null ?? 10   // return - 10
// val1 = undefined ?? 20  // return - 20
val1 = null ?? 10 ?? 20   // return - 10


console.log(val1);

// Terniary Operator

// condition ? true : false
const price  = 100

price <= 80 ? console.log("price is less 80") : console.log("greater 80");