// Object literal - Literal is an object it is base  unit

const user = {
    username: "chandan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Got user detialse form database`);
        // console.log(`Got ${this.username} detialse form database`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user["loginCount"]);
// console.log(Object.keys(user));
// console.log(user.getUserDetails());


// console.log(this);


//  Constructor function

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

// new keyword is use to constructor function and (give a new value & do not override the value)
// step2 - new keyword create new object
// step3 - call constructor function call - argument packed
// step4 - all argument are injected

const userOne = new User("chandan", 4, true)
const userTwo = new User("subrat", 34, false)
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);  // referance of it self