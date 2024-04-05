const formServiceDecades = document.querySelector(".form-service-decades")
const submitButton = document.querySelector('#subt')
const decadeField = document.querySelector('#decadeField')

const decadeWiseIncrementField = document.querySelector(".form-decade-wise-increment")
const insideIncrementCard = document.querySelector("#decade-wise-increment")

const otherDetailsForm = document.querySelector('.form-other-details')
const salaryField = otherDetailsForm.querySelector('.startingSalary')
const percentageField = otherDetailsForm.querySelector('.investmentPer')

const dynamicPortfolioItem = document.querySelector('.dynamicItem')
const portfolioItemAddButton = document.querySelector('.portfolio-details')

const resultSectionForm = document.querySelector(".form-result")
const validationTextField = document.querySelector('.validation-result')
const startNewButton = document.querySelector('#startNewButton')

let decadeIncNav = document.createElement('nav')

// User input
let allInc = []
let globalDecades = 0
let startingSalary = 0
let percentageOfSalary = 0
let portfolioObj = []

// Variable definition
let itemIndex = 1
let play = true
let incFieldCreation = false
let endGameFlag = false


// Listen the user's decade response
formServiceDecades.addEventListener('submit', function(e){
    e.preventDefault()
    if(play){
        const decades = parseInt(decadeField.value)
        if(validateNumber(decades)){
            decadeIncNav.setAttribute('class', 'incElement')
            addIncrementFieldForUserInput(decades)
            addDecadeIncSubmitButton()
            insideIncrementCard.appendChild(decadeIncNav)
            incFieldCreation = true
            globalDecades = decades
            submitButton.setAttribute('disabled', '')
            decadeField.setAttribute('disabled', '')
        }
        else{
            submitButton.setAttribute('disabled', '')
            decadeField.setAttribute('disabled', '')
            addNewPlayButton()
        }  
    }
})

// Listen the user's decade-wise increment response
decadeWiseIncrementField.addEventListener('submit', function(e){
    e.preventDefault()
    if(incFieldCreation){
        const decadeInValues = decadeIncNav.querySelectorAll('#incItem')
        const decadeIncSubmitButton = decadeIncNav.querySelector('.decadeIncSubmit')
        for (let index = 0; index < globalDecades; index++) {
            const incValue = parseInt(decadeInValues[index].value)
            if (validateNumber(incValue)){
                allInc.push(incValue)
            }
            else{
                decadeIncSubmitButton.setAttribute('disabled', '')
                addNewPlayButton()
                break
            }
        }
        decadeIncSubmitButton.setAttribute('disabled', '')
    }
})

// Listen the user's other details (salary, percentage of salary) response
otherDetailsForm.addEventListener('submit', function(e){
    e.preventDefault()
    // Collect button
    const collectButton = otherDetailsForm.querySelector('#collect')
    // Modify button
    const modifyButton = otherDetailsForm.querySelector('#modify')
    // Get user's button click response
    let action = e.submitter.value
    if(action === "Collect"){
        collectButton.setAttribute('disabled', '')
        modifyButton.removeAttribute('disabled', '')
        startingSalary = parseFloat(salaryField.value)
        percentageOfSalary = parseFloat(percentageField.value)
    }
    if(action === "Modify"){
        collectButton.removeAttribute('disabled', '')
        modifyButton.setAttribute('disabled', '')
    }
})

// Listen the user's portfolio details response
portfolioItemAddButton.addEventListener('submit', function(e){
    e.preventDefault()
    // Get the value of the clicked button
    let action = e.submitter.value
    if(action === "Add"){
        // Create new portfolio element <p> tag
        const newPortfolioItem = document.createElement('p')
        newPortfolioItem.setAttribute('class', `itemNo-${itemIndex}`)
        newPortfolioItem.setAttribute('id', `elementsOfPortfolio`)
        newPortfolioItem.innerHTML = `<input type="text" id="portfolioItemField" class="itemName" placeholder="Name">
        <input type="number" id="portfolioItemField" class="itemPercentage" placeholder="Percentage">
        <input type="number" id="portfolioItemField" class="expectedReturn" placeholder="Return">`
        dynamicPortfolioItem.appendChild(newPortfolioItem)
        itemIndex = itemIndex + 1
    }
    else if(action === "Remove" && itemIndex > 1){
        let removableItem = document.querySelector(`.itemNo-${itemIndex - 1}`)
        if(removableItem){
            dynamicPortfolioItem.removeChild(removableItem)
            itemIndex = itemIndex - 1
            if(portfolioObj.length > 0){
                portfolioObj.pop()
            }
        }
    }
    else if(action === "Collect" && itemIndex > 1){
        const portfolioItemInfo = dynamicPortfolioItem.querySelectorAll(`#elementsOfPortfolio`)
        portfolioItemInfo.forEach(function(field){
            const portfolioItemInfoObj = {}
            portfolioItemInfoObj["itemName"] = field.querySelector('.itemName').value
            portfolioItemInfoObj["itemPercentage"] = parseFloat(field.querySelector('.itemPercentage').value)
            portfolioItemInfoObj["expectedReturn"] = parseFloat(field.querySelector('.expectedReturn').value)
            portfolioItemInfoObj["id"] = field.getAttribute('class').split('-')[1]
            portfolioObj.push(portfolioItemInfoObj)
        })
    }

})

// Listen the user's response in result section
resultSectionForm.addEventListener('submit', function(e){
    e.preventDefault()
    // Get the value of the clicked button
    let action = e.submitter.value
    if(endGameFlag && action === "Start New"){
        play = true
        allInc = []
        startingSalary = 0
        percentageOfSalary = 0
        globalDecades = 0
        portfolioObj = []
        decadeField.value = ''
        salaryField.value = ''
        percentageField.value = ''
        submitButton.removeAttribute('disabled', '')
        decadeField.removeAttribute('disabled', '')
        if(incFieldCreation){
            const incInputField = insideIncrementCard.querySelector('.incElement')
            if(incInputField){
                insideIncrementCard.removeChild(decadeIncNav)
            }
        }
        decadeIncNav = document.createElement('nav')
        validationTextField.innerHTML = ''
        startNewButton.setAttribute('disabled', '')
    }
    else if(action === "Get Result"){
        // Need to do the final calculation to get the ultimate profit
        // console.log("User Input For Cool Profit");
        // console.log(`Increment List: ${allInc}`);
        // console.log(`Starting Salary: ${startingSalary}`);
        // console.log(`Percentage of Salary: ${percentageOfSalary}`);
        // console.log(portfolioObj);
        
        let allAttribute = getFinalProfit(allInc, portfolioObj, startingSalary, percentageOfSalary)
        console.log(allAttribute["itemWiseGainList"]);
        console.log(allAttribute["ultimateAmount"]);
        console.log(allAttribute["validationStatus"]);
        endGameFlag = true
        startNewButton.removeAttribute('disabled', '')

    }
})

function addIncrementFieldForUserInput(numberOfDecade){
    
    for (let index = 0; index < numberOfDecade; index++) {
        const incrementField = document.createElement('input')
        incrementField.setAttribute('placeholder', `${index + 1} Inc`)
        incrementField.setAttribute('type', 'number')
        incrementField.setAttribute('id', 'incItem')
        incrementField.setAttribute('class', `inc-${index + 1}`)
        incrementField.style.cssText = `color: #000; width: 50px; height: 37px; 
                                        font-size: 30px; border style: none; 
                                        margin-top: 10px; border: 2px solid #6c6d6d; 
                                        border-radius: 10px; text-align: center; font-size: 10px; margin-left: 10px`
        decadeIncNav.appendChild(incrementField)

    }
    
}

function addDecadeIncSubmitButton(){
    const button = document.createElement('input')
    button.setAttribute('type', `Submit`)
    button.setAttribute('value', `Submit`)
    button.setAttribute('id', `${submitButton.getAttribute('id')}`)
    button.setAttribute('class', 'decadeIncSubmit')
    button.style.cssText = "margin-left: 10px"
    decadeIncNav.appendChild(button)

}

function validateNumber(num){
    if(isNaN(num) || num === ''){
        validationTextField.innerHTML = `Please give a valid number`
        return false
    }
    else{
        return true
    }   
}

function addNewPlayButton(){
    startNewButton.removeAttribute('disabled', '')
    endGameFlag = true
}

function getInvestAmountYearlyBasis(itemPercentage, startingAmount,
    salaryIncList, salaryPercent){
    let amountArray = []
    let tempStartingSalary = startingAmount
    
    for (let index = 0; index < salaryIncList.length; index++) {
        const inc = salaryIncList[index]
        
        for (let index = 0; index < 10; index++) {
            let investAmountInEachYear = 0
            
            if(index === 0){
                const itemWiseInvestmentPerItem = Math.round((tempStartingSalary * salaryPercent) / 100, 3)
                investAmountInEachYear = Math.round(((itemPercentage * itemWiseInvestmentPerItem) / 100) * 12, 3)
                // console.log(index, tempStartingSalary, investAmountInEachYear);
            }
            else{
                tempStartingSalary = Math.round(tempStartingSalary + ((tempStartingSalary * inc) / 100), 3)

                const itemWiseInvestmentPerItem = Math.round((tempStartingSalary * salaryPercent) / 100, 3)

                investAmountInEachYear = Math.round(((itemPercentage * itemWiseInvestmentPerItem) / 100) * 12, 3)
                // console.log(index, tempStartingSalary, investAmountInEachYear);
            }
            amountArray.push(investAmountInEachYear)
            
        }
        
    }
    return amountArray
}

function getExpectedItemReturn(itemPercentage, itemGrowth, startingAmount,
    salaryIncList, salaryPercent){
    let itemLevelInvestment = 0
    let itemLevelGain = 0
    let itemLevelTotal = 0
    const yearlyBasisInvestment = getInvestAmountYearlyBasis(itemPercentage,
        startingAmount, salaryIncList, salaryPercent)
    // console.log(`yearlyBasisInvestment: ${yearlyBasisInvestment}`);
    for (let index = 0; index < yearlyBasisInvestment.length; index++) {
        const perYearInvestment = yearlyBasisInvestment[index]
        itemLevelInvestment += perYearInvestment
        itemLevelGain += Math.round((perYearInvestment * itemGrowth) / 100, 3)
        itemLevelTotal += (itemLevelInvestment + itemLevelGain)
        
    }
    return {
        itemLevelInvestment: itemLevelInvestment,
        itemLevelGain: itemLevelGain,
        itemLevelTotal: itemLevelTotal
    }
    
}

function getFinalProfit(incrementList, portfolioItemList, myStartingSalary, salaryPercentage){
    let validationStatus = ""
    let itemWiseGainList = []
    let ultimateAmount = 0
    if(incrementList.length === 0){
        validationStatus = "Please Provide Decade-wise Increment"
    }
    else if(portfolioItemList.length === 0){
        validationStatus = "Please Provide Portfolio Item"
    }
    else if(isNaN(myStartingSalary) || myStartingSalary === '' || myStartingSalary <= 0){
        validationStatus = "Please Provide Starting Salary"
    }
    else if(isNaN(salaryPercentage) || salaryPercentage === '' || salaryPercentage <= 0){
        validationStatus = "Please Provide Percentage of Starting Salary"
    }
    else{
        for (let index = 0; index < portfolioItemList.length; index++) {
            const eachItemInPortfolio = portfolioItemList[index]
            const itemWiseAttributeObj = getExpectedItemReturn(eachItemInPortfolio["itemPercentage"], eachItemInPortfolio["expectedReturn"], myStartingSalary, incrementList, salaryPercentage)
            eachItemInPortfolio["itemLevelInvestment"] = itemWiseAttributeObj["itemLevelInvestment"]
            eachItemInPortfolio["itemLevelGain"] = itemWiseAttributeObj["itemLevelGain"]
            eachItemInPortfolio["itemLevelTotal"] = itemWiseAttributeObj["itemLevelTotal"]
            itemWiseGainList.push(eachItemInPortfolio)

        }
        const ultimateAmount = Math.round(itemWiseGainList.reduce( function (acc, current) {return acc + current["itemLevelTotal"]}, 0), 2)
        validationStatus = "Calculation Done"

    }
    
    return {
        validationStatus: validationStatus,
        itemWiseGainList: itemWiseGainList,
        ultimateAmount: ultimateAmount
    }
}