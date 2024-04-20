class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName: ${this.username}`)

    }

    static createId(){
        return `12678`
    }
}

const hello = new User("Hello")

// console.log(hello.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const cool = new Teacher("hello", "hello@world.com")

cool.logMe()