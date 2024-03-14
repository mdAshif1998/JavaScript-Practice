// Date

let myDate = new Date()

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date(2024, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("10-01-2024")
// console.log(myCreatedDate.getTime());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long",
})