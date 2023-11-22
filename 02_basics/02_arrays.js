const marvel_Heros = ["thor","spider","IronMan"]
const dc_Heros = ["superman","batman","flash"]
  
marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros);  //  [ 'thor', 'spider', 'IronMan', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_Heros[3]); 

const all_heros = marvel_Heros.concat(dc_Heros)
// console.log(all_heros); // [ 'thor', 'spider', 'IronMan', [ 'superman', 'batman', 'flash' ] ]
// console.log("adf"); 
console.log(all_heros[3]);

const all_new_heros = [...marvel_Heros, ...dc_Heros] // (spread operator ) 
// console.log(all_new_heros);


const another_array = [1, 2, 3 , [4, 5, 6], 7, [6, 7, [4, 5]]]   
const real_another_array = another_array.flat(Infinity)  // flat() => return all subarray convert into a single array, we have to set depth also
// console.log(real_another_array); 

// console.log(Array.isArray("chandan"))   // isArray => check it is array or not, return - false
// console.log(Array.from("chandan"))      // from => convert anything in the array
// console.log(Array.from({name: "chandan"}))  // form not convert Object into an array  = it return [] (interesting)
// console.log(Array.from("4515"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //Array.of() => convert multiple variable in an array