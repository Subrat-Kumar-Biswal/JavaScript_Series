const accountId = 1254      //Do not change the value
let accountMail = "chandan27@gmail.com"   //Value will be change but within the scope 
var accountPassword = "6372"// Value can change any where

accountCity = "Berhampur"
let accountState;       //default value is undefined


// accountId = 258  //not allowed to change

accountMail = "subrat971@gamil.com"
accountPassword = "256"
accountCity = "Hydrabad"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountMail,accountPassword,accountCity,accountState])