
// var c = 3000;
let a = 500;    //global scope

if(true){
  let a = 10;
  const b = 30;
  var c = 20;
  // console.log("INNER: ",a);  //block scope
}


// console.log(a)
// console.log(b)
// console.log(c)


// nested Scope

function one(){
  const username = "chandan"

  function two (){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);  
  // two()
}

one()

if(true){
  const username = "chandan"
  if(username === "chandan"){
    const website = " youtube"
    console.log(username + website);
  }
  // console.log(website);  // return error website not defiened
}

// console.log(username);   //return error website not defiened


// ++++++++++++++++++++++  interesting ++++++++++++

console.log(addone(5))  // return 6

function addone(num){
  return num + 1
}

// console.log(addone(5))     


AddTwo(4)   // 'AddTwo' before initialization 

const AddTwo = function (num){         // it is experssion  - different type to write function 
  return num  + 2
}
