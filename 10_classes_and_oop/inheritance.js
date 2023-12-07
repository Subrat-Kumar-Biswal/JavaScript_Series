class User {
    constructor(username){
        this.username
    }
    logMe(){
        console.log(`user name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, id){
        super(username)
        this.email = email
        this.id = id
    }
    addCourses(){
        console.log(`new couse was added by ${this.username} and id is ${this.id}`);
    }
}

const chai = new Teacher("chandan", "ad@gail.com", 4288)
chai.logMe();
const tea = new User("subrat")
tea.logMe()