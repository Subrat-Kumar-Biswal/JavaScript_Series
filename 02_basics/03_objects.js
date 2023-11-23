// singleton

// object literals  

const mySym = Symbol("key1") //declare symbol // {interview question.(add a symbol in obj use as a symbol)}
// => [mySym]: "mykey1",  this is the current syantax to use symbol

const jsuser = {            // An object is a collection of properties, Object values are written as key : value pairs (name and value separated by a colon)
    name: "chandan",
    "full name": "subrat kumar biswal",
    [mySym]: "mykey1",
    age: 21,
    location: "berhampur",
    email: "chandan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["sunday","tuesday"]
}

// access Object   (. notation, [] )
console.log(jsuser.location);  //  In object everything is an string if we can access (.) wecan't access the full name
// console.log(jsuser."full name");   // invalid we can not access by this method

// console.log(jsuser["email"]);  // if we can access this method we put the string.
// console.log(jsuser["full name"]);
// console.log(typeof jsuser["mySym"]);  //string
// console.log(jsuser[mySym]);  //symbol
// console.log(typeof jsuser[mySym]);

// replace element

jsuser.age = 85
// console.log(jsuser["age"]);

//freeze = to lcok the vlaue

// Object.freeze(jsuser)
jsuser.city = "chatarpur"   // not changes because we freeze the object
// console.log(jsuser);

// add function

jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greetingTwo = function(){    // this is use to access all the keys in objects
    console.log(`hello js user, ${this.name} your age is ${this.age} city is ${this.city} .`);  // this reffer to the current object
}
// console.log(jsuser.greeting);  // return - undefined , [Function (anonymous)]
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());


// Note => {To access the element of an object use (.) but in some cases to use []}