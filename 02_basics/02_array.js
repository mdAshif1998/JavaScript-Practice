const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dc)
// console.log(marvelHeros);
const allHeros = marvelHeros.concat(dc)
const allNewHeros = [...marvelHeros, ...dc]
// console.log(allNewHeros);
const anotherArray = [1, 2, 4, [7, 8], 10, [4, 9, [12, 45]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);
console.log(Array.from({name: "Hello"}));
let score1 = 100
let score2 = 200
let score4 = 400
console.log(Array.of(score1, score2, score4));
