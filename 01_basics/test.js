console.log("Hello World")
let itemObjArray = [{
    itemLevelTotal: 45768
}]

const ultimateAmount = Math.round(itemObjArray.reduce( function (acc, current) {return acc + current["itemLevelTotal"]}, 0), 2)

console.log(ultimateAmount);