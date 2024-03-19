// const user = new Object() // Singleton
const user = {} // Non-Singleton
user.id = "14657thh"
user.name = "Hello"
user.isLoggedIn = false
// console.log(user);

const regularUser = {
    email: "hello@google.com",
    fullname: {
        userfullname: {
            firstname: "Hello",
            lastname: "World"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}
console.log(obj4);
console.log(obj1);

const users = [
    {
        id: 1,
        email: "hello@google.com"
    },
    
    {
        id: 1,
        email: "hello@google.com"
    }

]

console.log(users[1].email);
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('cool'));

const course = {
    courseInstructorName: "Hello World",
    price: "Free",
    duration: 60
}
const {courseInstructorName: instructor} = course
console.log(instructor);
const navbar = ({company}) => {

}
navbar(company = "Hello")