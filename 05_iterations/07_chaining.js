
const myNumbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)  
// const newNums = myNumbers.map( (num) => { return num + 10})  // if we open scope then give return statement 
// console.log(newNums);


// const values = myNumbers.forEach( (item) =>{
//     console.log(item + 10);
// })

// ++++++++++++++ chaining

// const newNums = new Map().Map().filter()  // we can use this

const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)


console.log(newNums);

