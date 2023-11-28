// for of loop

["", "", ""]  // stirng
[{}, {}, {}]  // Object

const arr = [1, 2, 3, 4, 5 ]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World !"

for(const greet of greetings){        //array
    // console.log(`Each char is ${greet}`);
}

// Maps   => creates an array by calling a specific function on each element present in the parent array

// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

const map = new Map()    

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")   //(not print) Map is print only unique entrues

// console.log(map);

for (const [key, value] of map) {    // print key and value
    console.log(key, ':-', value);
}

// const myObject = {         
//     'game1': 'NFS',
//     'game2': 'PUBG',
// }

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);     //myObject is not iterable
}

const myObject = {
    js: 'javascript',
    rb: 'ruby',
    cpp: 'c++',
}

for(const key in myObject){
    // console.log(`${key} for ${myObject[key]}`);
}

const programming = ["js", "python", "cpp", "java"]

for(const key in programming){
    // console.log(key, programming[key]);
}

for(const key in map){    //map is not itteratable
    console.log(map[key]);
}