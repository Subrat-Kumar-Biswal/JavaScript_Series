const marvel_Heros = ["thor","spider","IronMan"]
const dc_Heros = ["superman","batman","flash"]
  
// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros);  //  [ 'thor', 'spider', 'IronMan', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_Heros[3]); 

marvel_Heros.concat(dc_Heros)
console.log(marvel_Heros); 