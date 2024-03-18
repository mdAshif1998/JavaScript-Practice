// literal, constructor, singleton

// object literals

// Object.create
const mySym = Symbol("Key")
const jsUser = {
    name: "Hello",
    "full name": "Hello World",
    [mySym]: "mykey1",
    age: 20,
    location: "Earth",
    email: "hello@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}
Object.freeze(jsUser) // Freeze the object and not allowed to change anything inside it.
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());