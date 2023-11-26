// Immediately Invoked Function Expressions (IIFE)

(function code(){
    console.log(`DB CONNECTED`);
})();

// ** interview why we use iffe => To remove global scope polution or variable or declaration we use

// write this in arrow function

// Two run this function we use (;) to the before  iffe function
(  () => {     
    // unnamed IFFE             
    console.log(`DB CONNECTED TWO`)
})();


//Pass parameter
(  (name) => {   
    // named IFFE               
    console.log(`DB CONNECTED TWO ${name}`)
})('chandan');

