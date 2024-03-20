const user = {
    username: "Hello",
    price: 2000,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "World"
// user.welcomeMessage()

// console.log(this);


// function cool(){
//     let username = "Hello"
//     console.log(this);
// }

// cool()

// const cool = function () {
//     let username = "Hello"
//     console.log(this.username);
// }

const cool = () => {
    let username = "Hello"
    console.log(this);
}

cool()

const add = (num1, num2) => {
    return num1 + num2
}

console.log(add(2, 4));

// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(2, 4));

// const myArray = [1, 2, 4]
// const newArray = myArray.forEach((num) => (num ** 2))
// console.log(newArray);