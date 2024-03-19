

function sayMyName(){
    console.log("H");
}


// sayMyName()


// function addTwoNumbers(number1, number2){
    
//     console.log(number1 + number2);

// }


function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}


// const result = addTwoNumbers(4, null)
// console.log(result);


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// const result = loginUserMessage("Hello")
// console.log(result);


function calculateCartPrice(val1, val2, ...num1){
    return num1

}

// console.log(calculateCartPrice(200, 400, 500));


const user = {
    username: "Hello",
    price: 200
}


function handleObject(anyobject){
    console.log(`Username in ${anyobject.username} and price in ${anyobject.price}`);


}


handleObject(user)
handleObject({
    username: "World",
    price: 400
})
const myArray = [200, 400, 600]


function returnSecondValue(getArray){
    return getArray[1]
}


console.log(returnSecondValue(myArray));

