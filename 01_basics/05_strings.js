const name = "chandan"
const repoCount = 1

// console.log(name + repoCount + "value");

//morden string interpolation   or  template lateral
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation  

//declaration
const gameName = new String ('chandan')

console.log(gameName[0]);
console.log(gameName.__proto__);   //{}


console.log(gameName.charAt(5));
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));      
console.log(gameName.indexOf('a'));


console.log(gameName.slice(0,3));     // in slice we give -ve value
console.log(gameName.slice(-3,-1));   

console.log(gameName.substring(0,4));   // not take a negative value  (chan)


const newStringOne = "      subrat     "
console.log(newStringOne)
console.log(newStringOne.trim())     //(It work on white space or line terminate) remove space starting and ending
console.log(newStringOne.trimStart())     //remove space starting space
console.log(newStringOne.trimEnd())     //remove space at ending



const url = "https://subrat.com"
console.log(url.replace('subrat','chandan'))  //replace the value in the string

console.log(url.includes('subrat'))   //return ture substring is present


const str = 'The quick_brown fox_ jumps over _the lazy dog.';
console.log(str.split('_'));

let friend = "chandan"
let friend1 = "jarvish"
console.log(friend.concat(" is a friend of the ",friend1,"ok."));
