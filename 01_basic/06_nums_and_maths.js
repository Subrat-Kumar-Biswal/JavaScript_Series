const score = 100
// console.log(score);

const balance = new Number(200)  // number
// console.log(balance);
// console.log(balance.toString().length); // string


// console.log(balance.toFixed(2))  // return two decimal value 200.00

const otherNumber = 123.63582
// console.log(otherNumber.toPrecision(3))  // Round figure ,return- 124


 const hunderd = 100000000
//  console.log(hunderd.toLocaleString('en-IN'));  //10,00,00,000 return string is indian

 //++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));  //absolute convert -ve to +ve, return 5

// console.log(Math.round(7.4));  // round up the value , it return 7 
// console.log(Math.round(7.6));  // round up the value , it return 8
// console.log(Math.ceil(4.2));  // it always return the top value ,it return 5
// console.log(Math.floor(4.9));  // it always return the lowest value ,it return 4

// console.log(Math.min(54,5,9,78));  // 5
// console.log(Math.max(54,5,9,78));  // 78

console.log(Math.random())  // return no. between 0 to 1
console.log((Math.floor(Math.random()*6)) + 1)  // return no. bet 1 to 6
// console.log(Math.random())

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1) + min))