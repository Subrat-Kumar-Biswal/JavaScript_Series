const coding = ["js", "python", "java", "cpp", "ruby"]

// coding.forEach( function (item){   //callback
//     console.log(item);
// })

// using arrow funcition

// coding.forEach( (item) =>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, array) => {  // access full array
//     console.log(item, index, array);
// })


const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
    },
    {
    languageName: "java",
    languageFileName: "java"
    },
    {
    languageName: "python",
    languageFileName: "py"
    },
]


myCoding.forEach( (item) =>{
    console.log(item.languageName);
})
