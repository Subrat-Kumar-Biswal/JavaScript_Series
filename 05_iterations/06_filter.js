// const coding = ["js", "python", "java", "cpp", "ruby"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values); // for each do not return values


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.filter( (num) => num < 4)  // giving conditions
// console.log(newNums);

// const newNums = myNum.filter( (num) => {  // in filter if we give conditions we have to give return statement
//     return num > 4  // return []
// })

const newNums = []

myNum.forEach( (item) => {
    if(item > 4){
        newNums.push(item);
    }
})
console.log(newNums);

