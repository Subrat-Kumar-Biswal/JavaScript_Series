// Dates 

let myDate = new Date()

// console.log(myDate);     
// console.log(myDate.toString());  // convert string ,it return-Mon Nov 20 2023 20:46:37
// console.log(myDate.toDateString());  // it return only date like (Mon Nov 20 2023)
// console.log(myDate.toLocaleString());  // return date and time , like(11/20/2023, 8:50:22 PM)
// console.log(typeof(myDate));  // it return object 


let myCreateDate = new Date(2023,0,24)   // month starts with  0 in js

// console.log(myCreateDate);
// console.log(myCreateDate.toString());
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.toDateString);


let myCreateDate1 = new Date("11-01-2023")   // According to the user
// console.log(myCreateDate1.toLocaleString());

let timeStamp = Date.now()

// console.log(timeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));  //convert milsecond

let newDate = new Date()

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);  // because it start count the month '0' so we have to add 1

// special feature 

newDate.toLocaleString('default',{   // we have enter those thing we want
    weekday : "long",
})

