// fetch('https://google.com').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    //DB calls
    // Cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)
})


promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({userName: 'Hello',
            email: 'hello@world.com'})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: 'Hello', password: '124'})
        }
        else{
            reject('Error')
        }
    }, 1000)
})


promiseFour
.then(function(user){
    console.log(user)
    return user.userName
})
.then((username) => {
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: 'javascript',
                     password: '278'})
        }
        else{
            reject('Error')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch{
        console.log('error');
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
// const data = await response.json()
// // const data = response.json()
// console.log(data);
//     }
//     catch(error){
//         console.log(`E: ${error}`);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {return res.json()})
.then((data) => {console.log(data);})
.catch((error) => {console.log(`E: ${error}`);})