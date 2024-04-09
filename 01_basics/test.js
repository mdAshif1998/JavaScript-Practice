let yearlyInvestAmountArray = []

// Populate invested amount in every month for the time period
function getYearlyInvestAmount(startingAmount, salaryIncList){
    let tempStartingSalary = startingAmount
    for (let index = 0; index < salaryIncList.length; index++) {
        const inc = salaryIncList[index]
        for (let index = 0; index < 10; index++) {
            if(index === 0){
                // const salaryArrayForMonthly = new Array(12).fill(tempStartingSalary)
                // yearlyInvestAmountArray = yearlyInvestAmountArray.concat(salaryArrayForMonthly)
                yearlyInvestAmountArray.push(tempStartingSalary)
            }
            else{
                tempStartingSalary = tempStartingSalary + ((tempStartingSalary * inc) / 100)
                // const salaryArrayForMonthly = new Array(12).fill(tempStartingSalary)
                // yearlyInvestAmountArray = yearlyInvestAmountArray.concat(salaryArrayForMonthly)
                yearlyInvestAmountArray.push(tempStartingSalary)
            }
        }
    }      
}

function getInvestAmountYearlyBasis(itemPercentage, salaryPercent){
    let amountArray = []
    for (let index = 0; index < yearlyInvestAmountArray.length; index++) {
        const salaryInEachYear = yearlyInvestAmountArray[index]
        const itemWiseInvestmentPerItem = (salaryInEachYear * salaryPercent) / 100
        const investAmountInEachYear = Math.round(((itemPercentage * itemWiseInvestmentPerItem) / 100) * 1000) / 1000
        const monthlyInvestArray = new Array(12).fill(investAmountInEachYear)
        amountArray = amountArray.concat(monthlyInvestArray)
    }
    const total = amountArray.reduce(function(total, current){return total + current}, 0)
    console.log(total);
    return amountArray
}

getYearlyInvestAmount(20000, [10])
// console.log(yearlyInvestAmountArray);
getInvestAmountYearlyBasis(100, 25)