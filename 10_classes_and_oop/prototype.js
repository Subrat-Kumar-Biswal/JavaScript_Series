// Prototye

// let myName = "chandan     "

// console.log(myName.truelength);  // space not allowed


let myHeros = ["thor", "spiederman"]

let heroPower = {
    thor: "hammer",
    spiderman: "makdi",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.chandan = function(){
    console.log(`chandan is present in all object`);
}

Array.prototype.heyChandan = function(){
    console.log(`chandan says hello`);
}

// heroPower.chandan()

// myHeros.chandan()
// myHeros.heyChandan()
// heroPower.heyChandan()


// inheritance

const user = {
    username: "chandan",
    email: "c@gmail.com"
}

const teacher = {
    makevideo: true,

}

const teachSupport ={
    isAvailable: false,
}

const taSupport = {
    makeAssignment: 'JS Asignment',
    fulltime: true,
    __proto__: teachSupport,
}

teacher. __proto__ = user  // inherit user

// morden syantax

Object.setPrototypeOf(teachSupport, teacher)


let anotherUsername = "javascript       "    // Create a method
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`${this.trim().length}`);
}

anotherUsername.truelength()
"chandan".truelength()
"subrat ".truelength()