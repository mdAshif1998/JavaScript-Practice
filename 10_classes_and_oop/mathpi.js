const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)

console.log(Math.PI)

const myObject = {
    name: 'cool',
    price: 50,
    isAvailable: true,
    orderBy: function(){
        console.log("Hello World")
    }
}

// console.log(Object.getOwnPropertyDescriptor(myObject, "name"))

Object.defineProperty(myObject, "name", {
    // Writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(myObject, "name"))

for (let [key, value] of Object.entries(myObject)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
    
}