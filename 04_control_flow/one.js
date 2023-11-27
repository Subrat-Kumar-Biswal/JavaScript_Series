// ++++++++++++++++++++  Control Flow ++++++++++

// if

if(true){

}
if(false){  // if condition false then the line 8 to 10 not execute .

}

// const isUserLoggedIn = true
const temprature = 41


if(3 == "3"){
    console.log("executed");    // executed
}
if(3 === "3"){
    console.log("executed");   // not compare different data type
}


if(temprature === 50){
    console.log("less than 50");
}else{
    console.log("temprature is greatethan 50");
}

// comparison operator  => [<, >, <=, >=, !=, ==, === - (strict equal), !==]


const score = 200

// if(score > 100){      // block scope
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// +++++++ short hand notation

// const balance = 2000

// if(balance > 500) console.log("test"),console.log("test2");  // not write this type of code in using (,)

// ++++++++++ nesting

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 1000){
//     console.log("less than 1000");
// }else if (balance < 1500) {
//     console.log("less than 1500");
// }else{
//     console.log("less than 2100");
// }

const isUserLoggedIn = true
const debitCard = true
const creditCard = false

// if (isUserLoggedIn && debitCard) {
//     console.log("Allow to buy course");
// }else{
//     console.log("not buy");
// }


