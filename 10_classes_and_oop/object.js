function mul(num){
    return num * 5
}

mul.power = 2
console.log(mul(20));   // 25
console.log(mul.power);  // 2
console.log(mul.prototype);  // {}

function createUser(username, score){
    this.username = username;
    this.score = score 
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chandu = new createUser("chandan", 25)
const tea = new createUser("tea", 234)


chandu.printMe()
