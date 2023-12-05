           // Promises

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// => A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()      // connect resolve and .then
    }, 1000)
});    // new promise made

 promiseOne.then(function(){         // .then is connection to resolve
    console.log("Promise consumed");
 })    // if we print this function then we want to connect to the resolve and then is line no. 16


 // Another method to write

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


// third promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "chandan", email: "chandan@gamil.com"})
    }, 2000)
})

promiseThree.then(function(user){
    console.log(user);
})


// promise Four

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "subrat", password: "1236"})
        }else{
            reject('ERROR: Something Went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){   // handle the error
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or reject"))


// promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "javascript", password: "1236"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})


async function consumePromiseFive(){
   try{
    const response = await promiseFive
   console.log(response);
   }catch(error){
    console.log(error);
   }
}
consumePromiseFive()



// async function  getAllUsers(){
//   try{
//     const response = await fetch('https://api.github.com/users/Subrat-Kumar-Biswal')
//     const data = await response.json()
//     console.log(data);
//   }catch(error){
//     console.log("E: ", error);
//   }
// }
// getAllUsers()


fetch('https://api.github.com/users/Subrat')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
