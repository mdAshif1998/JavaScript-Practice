const user = {
    userName: "Hello",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){return this.userName}
}

// console.log(user.userName)

// console.log(user.getUserDetails());

function myUser(userName, loginCount, isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this

}

const userOne = new myUser("Hello", 10, false)
console.log(userOne.constructor)
console.log(myUser.prototype)

const userTwo = myUser("Hello", 10, false)
console.log(userTwo.constructor)
console.log(myUser.prototype)