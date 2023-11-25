
// var c = 3000;
let a = 500;    //global scope

if(true){
  let a = 10;
  const b = 30;
  var c = 20;
  console.log("INNER: ",a);  //block scope
}


console.log(a)
// console.log(b)
// console.log(c)


