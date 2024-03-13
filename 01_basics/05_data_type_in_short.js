// Primitive data type (Call by value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 1000.5

const isLoggedIn = false
const outsideTemp = null

let userEmail

const id = Symbol('4567')
const anoherId = Symbol('4567')

console.log(id === anoherId)

const bigNumber = 477477587584358457438348757853577483574n

console.log(typeof id);

// Referance (Non-Primitive) (call by referance)

// Array, Objects, Functions

const heros = ["shaktiman", "doga"]
let myObj = {
    name: "Hello",
    age: 20,
}

const myFunction = function(){
    console.log("Hello WOrld");
}
// myFunction is object function in data type
console.log(typeof myFunction);