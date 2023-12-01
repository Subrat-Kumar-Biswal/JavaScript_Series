// array => The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const myArray = [0, 1, 2, 3, 4, 5]  //Array index starting with 0
const myHeros = ["thor","spider"]
// console.log(myArray[2])
// console.log(myHeros[0]);

const myArray2 = new Array(1, 2, 3, 4)  //Automatically add squrebracket
// console.log(myArray2[1]);


// Array Method

// myArray.push(6)      //push() => Append new element in the end of the array.
// myArray.push(10)   
// myArray.pop()        //pop() => Delete last element in the array.
// console.log(myArray);


myArray.unshift(12)     //Shifted all element and add element in the first
myArray.shift()         //Delete remove the first element in the array
// console.log(myArray);


// console.log(myArray.includes(5)); //It return Boolean value (if the element present it return ture).

// console.log(myArray.indexOf(9)); // if the element is present it return (1).
// console.log(myArray.indexOf(3)); //if the element present is return the index of the element.

// const newArray = myArray.join()   //it convert array to string 
// console.log(typeof newArray);    //String
// console.log( newArray);    
// console.log(myArray);


// slice, splice

console.log("A ", myArray); //return - A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArray.slice(1,3)   //return sub array from the array
console.log(myn1);    // [ 1, 2 ]
console.log("B ", myArray);     // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArray.splice(1,3) 
console.log(myn2);     // [ 1, 2, 3 ]
console.log("C ", myArray);  //  C  [ 0, 4, 5 ]
console.log(myn2);    //  [ 1, 2, 3 ]


//The main difference between slice and splice :-
// 1. slice donot print the last Index but splice is printed.
// 2. splice manipulated the array but slice not manipulated.
/* 3. slice returns a piece of the array but it doesn't affect the original array
   -> splice changes the original array by removing, replacing, or adding values and        
      returns the affected values.
*/


let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// splice(startingindex, deleted index, add element)
// arr.splice(2, 2, 25, 65);
// console.log(arr);

// Add element
arr.splice(3, 0, 654)
console.log(arr);

// delete element
arr.splice(3, 1)
console.log(arr);

// replace element
arr.splice(5, 1, 100)
console.log(arr);