const User = {
    _email: "chandna@gmail.com",
    _password: "3242jas",

    get email(){
        return this._email.toUpperCase()
    },
    set(value){
        this._email = value
    }
}

const chai = Object.create(User)
console.log(chai.email);