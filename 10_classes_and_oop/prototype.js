// let myName = "Hello"

// console.log(myName.truelength)

let myHero = ["Thor", "Spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",
    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }

}

Object.prototype.hello = function() {
    console.log(`Hello is present in all objects`);
}

Array.prototype.cool = function(){
    console.log(`Cool function is available in all Array`);
}

myHero.hello()
myHero.cool()
// heroPower.cool()

// Inheritance

const teacher = {
    make: true
}

const support = {
    isAvailable: false
}

const taSupport = {

    assignment: 'JS assignment',
    fullTime: true,
    __proto__: support
}

const user = {
    name: "Hello",
    email: "xyz@xyz.com"
}

teacher.__proto__ = user

Object.setPrototypeOf(support, teacher)

let anotherUserName = "Hello    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength()
"cool   ".trueLength()
"world  ".trueLength()