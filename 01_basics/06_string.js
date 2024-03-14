const name = "Hell-o"

const count = 10

console.log(`Hello my name is ${name} and my count is ${count}`);

const gName = new String('Hell-o') // String object

console.log(gName[0]);
console.log(gName.__proto__);
console.log(gName.length);
console.log(gName.toUpperCase());
console.log(gName.charAt(2).toUpperCase());
console.log(gName.indexOf('l'));

const mGName = gName.substring(0, 4)
console.log(mGName);

const otherString = gName.slice(-6, )
console.log(otherString);

const newString = "       hello       "
console.log(newString.trim());

const url = "https://google.com/hello%20world"
console.log(url.replace('%20', '-'));

console.log(url.includes('cool'));
const newModify = gName.split(' ')
console.log(newModify);