let a = 10
const b = 20
var d = 40
if (true) {
    let a = 200
    d = 400
}
// console.log(a);
// console.log(b);
console.log(d);


function one(){
    const username = "Hello"

    function two(){
        const website = "Google"
        console.log(username);
    }
    two()

}

one()

if (true) {
    const username = "Hello"
    if (username === "Hello") {
        const website = "Google"
        console.log(username);
        
    }
    
}


console.log(addone(5));
function addone(number) {
    return number + 1
    
}


const addTwo = function(num){
    return num + 2
}

addTwo(5)

