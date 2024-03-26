const myNum = [1, 2, 4]

const newNum = myNum.reduce( function (acc, current) {return acc + current}, 0 )

console.log(newNum);