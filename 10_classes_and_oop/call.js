function setUserName(userName){
    this.userName = userName
    console.log("Called");
}

function createUser(userName, email, password){
    setUserName.call(this, userName)
    this.email = email
    this.password = password

}


const hello = new createUser("cool", "hello@world.com", "123")
console.log(hello)


