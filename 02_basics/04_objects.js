// const braveUser = new Object()   // singleton object
const braveUser = {}                // non-singleton Object ,return = {}


braveUser.id = "452e"
braveUser.name = "chadnan"
braveUser.isLoggedIn = false

// console.log(braveUser)   // return - 

const regularUser = {
    email: "sum@gmail.com",
    fullname: {
        userfullname: {
            firstname: "         chandan",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// combine two objcet

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)  //assign() => method is use to combine two object.
// console.log(obj3);     //{} => target & ob1,obj2 => source.

const obj3 = {...obj1, ...obj2}  // spread() => combine two string
// console.log(obj3); 


const users = [
    {
        id: 4,
        email: "h@gmail.com"
    },
    {
        id: 4,
        email: "h@gmail.com"
    },
    {
        id: 4,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(braveUser);

console.log(Object.keys(braveUser));    // return keys  ,the type is(array)
console.log(Object.values(braveUser));  // return values
console.log(Object.entries(braveUser)); // retrun array in the array ,[ [ 'id', '452e' ], [ 'name', 'chadnan' ], [ 'isLoggedIn', false ] ]



console.log(braveUser.hasOwnProperty('isLoggedIn'));   // hasOwnProperty => return if presetnt

