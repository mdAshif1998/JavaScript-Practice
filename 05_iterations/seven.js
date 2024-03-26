const myNumbers = [1, 2, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumbers.map( (num) => { return num + 10} )
const newNum = myNumbers
               .map( (num) => num  * 10 )
               .map( (num) => num + 1 )
               .filter( (num) => num >= 40 )
console.log(newNum);