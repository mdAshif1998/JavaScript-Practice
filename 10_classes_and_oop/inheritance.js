class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCource(){
        console.log(`A new cource was added by ${this.username}`)
    }
}


const cool = new Teacher("Hello", "hello@world.com", "45999")

cool.addCource()
cool.logMe()
const hello = new User("126788")

hello.logMe()
console.log(cool instanceof User)