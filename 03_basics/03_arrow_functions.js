// ** Browser global object is => Window Object


const user = {            
    username: "chandan",
    price: 666,
    wellcomeMessage: function(){ 
        console.log(`${this.username} , wellcome to website`);
        console.log(this);   // return whole object
    },
    
}
                           // this => reffer to current context/value.

// user.wellcomeMessage()      // reutrn chandan , wellcome to website

// user.username = "subrat"    // here the context will be changed

// user.wellcomeMessage()      // return subrat , wellcome to website

// console.log(this);       //   {}


// function code(){
//     let username = "chandan"
//     console.log(this.username);  // undefined
// }

// code()

// different type to write a fuction

// const code = function(){
//     let username = "chandan"
//     console.log(this.username);  // undefined
// }
// code()


          // Arrow function
const code = () => {
    let username = "chandan"
    console.log(this.username);  // undefined
}

// code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//  -------------------  Implicit return 

// const addTwo = (num1, num2) => num1 + num2  

// const addTwo = (num1, num2) => (num1 + num2) 

// ---------- return object
const addTwo = (num1, num2) => ({username: "chandan"})  

console.log(addTwo());


const myArray =  [2, 6, 8, 1, 16, 4]

// myArray.forEach(() => {} )  

