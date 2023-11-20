// primitive data type  (it gives the copy in the memory not refferece)

/*  7 types : string
            : Number
            : Boolean
            : null (empty)
            : undefined
            : Symbol
            : BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
console.log(typeof outsideTemp );  // Objects

let userEmail;  //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 7865313127348913n;
console.log(typeof(bigNumber));
// console.log(typeof bigNumber );



/* Reference Type(Non primitive)  {it allocate reference in memory}
            : Array
            : Objects
            : Functions
*/

const heros = ["saktiman","Thor","doga"]   //Arrays
console.log(heros);
console.log(typeof heros ); // objects


let myObj = {           //Objects
    name : "Subrat",
    age : 22,
}
console.log(myObj);


const myFunction = function(){
    console.log("Hello world");
}
myFunction();
console.log(typeof myFunction ); // Object fuction


//https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-primitive)

let myName = "chandan"

let anotherName = myName
anotherName = "subrat" 

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "chandan@gmail.com",
    upi:"363252@ybl",
}

let userTwo = userOne

userTwo.email = "subrat@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


/*
                           Table 20 — typeof Operator Results

      Type of val	                                                    Result

Undefined	                                                         "undefined"
Null	                                                               "object"
Boolean	                                                               "boolean"
Number	                                                               "number"
String	                                                               "string"
Object (native and does
 not implement [[Call]])                                                "object"
 	                                                                   
Object (native or host and does 
 implement [[Call]])	                                                "function"
                                                                       
Object (host and does 
not implement [[Call]])	                                    Implementation-defined except may
                                                     not be "undefined", "boolean", "number", or "string
*/


