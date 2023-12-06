function setUsername(username){
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this, username)    // .call hold the reffeence
    // this.username = username
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "ajd@gjalj", 234234)
console.log(chai);