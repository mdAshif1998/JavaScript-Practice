// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password

//     }
//     encryptPassword(){
//         return `${this.password}xyz`
//     }

//     modifyUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const cool = new User("Hello", "hello@world.com", "45ujgv")
// console.log(cool.modifyUserName())

// behind the seen

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

const hello = new User("Hello", "hello@world.com", "45ujgv")
console.log(hello.encryptPassword())