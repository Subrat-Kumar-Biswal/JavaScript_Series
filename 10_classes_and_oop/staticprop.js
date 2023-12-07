class User {
    constructor (user){
        this.user = user
    }
    logMe(){
        console.log(`username ${this.user}`);
    }

    static creatId(){
        return `123`
    }
}

const chandan = new User("subrat")
// console.log(chandan.creatId());   // in static we cannot acces th eany class


class Teacher extends User {
    constructor(user, email){
        super(user)
        this.email = email
    }

}

const chai = new Teacher("chandan", "cha@gmail.com")
chai.logMe()