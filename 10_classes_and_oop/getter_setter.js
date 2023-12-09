// getter = the value user see we can set this by getter(we get the value)
// setter = we set the value  (we set the value)


class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()  // always give return nstatement
    }
    set email(value){
         this._email = value  // we set property so we cant give return statement
    }
    

    get password(){
        // return this._password.toUpperCase()     // to give the value to the user
        return`${this._password}@chandan`
    }
    
    set password(value){
        this._password = value
    }
}

const chandan = new User("chan@gmail.com", "asdf")
console.log(chandan.password);
console.log(chandan.email);



