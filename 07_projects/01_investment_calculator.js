const formSalaryWiseInvest = document.querySelector(".form-salary-wise-investment")
const dynamicSalaryIncVsTime = document.querySelector('.dynamicSalaryIncVsTime')

const normalInvestmentField = document.querySelector(".form-normal-investment-with-step-up")
const durationInput = normalInvestmentField.querySelector(".timePeriod")
const stepUpInput = normalInvestmentField.querySelector(".stepUp")
const normalInvestCollectButton = normalInvestmentField.querySelector('#inc-collect')
const normalInvestModifyButton = normalInvestmentField.querySelector('#inc-modify')
const insideIncrementCard = document.querySelector("#decade-wise-increment")

const otherDetailsForm = document.querySelector('.form-other-details')
const salaryField = otherDetailsForm.querySelector('.startingSalary')
const percentageField = otherDetailsForm.querySelector('.investmentPer')

const dynamicPortfolioItem = document.querySelector('.dynamicItem')
const portfolioItemAddButton = document.querySelector('.portfolio-details')

const resultSectionForm = document.querySelector(".form-result")
const validationTextField = document.querySelector('.validation-result')
const startNewButton = document.querySelector('#startNewButton')

const finalProfitSection = document.querySelector('#profit')

let disabledButtonStyle = `opacity: 0.6; cursor: not-allowed`
let yearlyInvestAmountArray = []

// User input
let allInc = []
let globalDecades = 0
let startingSalary = 0
let percentageOfSalary = 0
let portfolioObj = []
let timePeriodVsIncrementObjectList = []

// Variable definition
let itemIndex = 1
let formSalaryWiseInvestItemIndex = 1
let play = true
let endGameFlag = false


// Listen the user's salary-wise investment plan
formSalaryWiseInvest.addEventListener('submit', function(e){
    e.preventDefault()
    if(play){
        // Get user's button click response
        let action = e.submitter.value
        if(action === "Add"){
            // Disable Normal Investment Buttons
            disabledOneButton(normalInvestCollectButton)
            disabledOneButton(normalInvestModifyButton)
            // Create new portfolio element <p> tag
            const newItem = document.createElement('p')
            newItem.setAttribute('class', `salaryItemNo-${formSalaryWiseInvestItemIndex}`)
            newItem.setAttribute('id', `elementsOfSalaryWiseInvest`)
            newItem.innerHTML = `<input type="text" id="dynamicItemUserInput" class="salaryDuration" placeholder="Salary Duration">
            <input type="number" id="dynamicItemUserInput" class="salaryIncrement" placeholder="Increment (%)">
            `
            dynamicSalaryIncVsTime.appendChild(newItem)
            formSalaryWiseInvestItemIndex = formSalaryWiseInvestItemIndex + 1
        }

        else if(action === "Remove" && formSalaryWiseInvestItemIndex > 1){
            let removableItem = document.querySelector(`.salaryItemNo-${formSalaryWiseInvestItemIndex - 1}`)
            if(removableItem){
                dynamicSalaryIncVsTime.removeChild(removableItem)
                formSalaryWiseInvestItemIndex = formSalaryWiseInvestItemIndex - 1
                if(timePeriodVsIncrementObjectList.length > 0){
                    timePeriodVsIncrementObjectList.pop()
                }
            }
        }

        else if(action === "Collect" && formSalaryWiseInvestItemIndex > 1){
            const salaryItemInfo = dynamicSalaryIncVsTime.querySelectorAll(`#elementsOfSalaryWiseInvest`)
            timePeriodVsIncrementObjectList = []
            salaryItemInfo.forEach(function(field){
                const salaryItemObject = {
                    incrementValue: parseFloat(field.querySelector('.salaryIncrement').value),
                    timeRange: parseFloat(field.querySelector('.salaryDuration').value),
                    id: field.getAttribute('class').split('-')[1]

                }
                timePeriodVsIncrementObjectList.push(salaryItemObject)
            })
        }
    }
})

// Listen the user's normal investment plan
normalInvestmentField.addEventListener('submit', function(e){
    e.preventDefault()
    // Get user's button click response
    let action = e.submitter.value
    timePeriodVsIncrementObjectList = []
    if(action === "Collect"){
        disabledOneButton(normalInvestCollectButton)
        // modifyButton.removeAttribute('disabled', '')
        enableOneButton(normalInvestModifyButton)
        const normalInvestObj = {
            incrementValue: parseFloat(stepUpInput.value),
            timeRange: parseFloat(durationInput.value)
        }
        timePeriodVsIncrementObjectList.push(normalInvestObj)
    }
    else if(action === "Modify"){
        // collectButton.removeAttribute('disabled', '')
        enableOneButton(normalInvestCollectButton)
        // modifyButton.setAttribute('disabled', '')
        disabledOneButton(normalInvestModifyButton)
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
        // collectButton.setAttribute('disabled', '')
        disabledOneButton(collectButton)
        // modifyButton.removeAttribute('disabled', '')
        enableOneButton(modifyButton)
        startingSalary = parseFloat(salaryField.value)
        percentageOfSalary = parseFloat(percentageField.value)
    }
    else if(action === "Modify"){
        // collectButton.removeAttribute('disabled', '')
        enableOneButton(collectButton)
        // modifyButton.setAttribute('disabled', '')
        disabledOneButton(modifyButton)
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
        newPortfolioItem.innerHTML = `<input type="text" id="dynamicItemUserInput" class="itemName" placeholder="Name">
        <input type="number" id="dynamicItemUserInput" class="itemPercentage" placeholder="Percentage">
        <input type="number" id="dynamicItemUserInput" class="expectedReturn" placeholder="Return">`
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
        portfolioObj = []
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
    if(endGameFlag || action === "Start New"){
        startNewActions()
    }
    else if(action === "Get Result"){
        getResultActions()
    }
})

function removeExistingPortfolioItem(){
    const existingElementsOfPortfolio = dynamicPortfolioItem.querySelectorAll("#elementsOfPortfolio")
    if(existingElementsOfPortfolio){
        existingElementsOfPortfolio.forEach(function(e){
            dynamicPortfolioItem.removeChild(e)
        })
    }
}

function removeExistingSalaryIncItem(){
    const existingElementsOfSalaryIncrement = dynamicSalaryIncVsTime.querySelectorAll("#elementsOfSalaryWiseInvest")
    if(existingElementsOfSalaryIncrement){
        existingElementsOfSalaryIncrement.forEach(function(e){
            dynamicSalaryIncVsTime.removeChild(e)
        })
    }
}

function removeExistingFinalProfitContent(){
    const anyPreviousProfit = finalProfitSection.querySelector(".profit-section")
    if(anyPreviousProfit){
        finalProfitSection.removeChild(anyPreviousProfit)
    }
}

function populateFinalProfitSection(totalAmountInvested, totalGain, finalAmount){
    removeExistingFinalProfitContent()
    const finalProfitElements = document.createElement('nav')
    finalProfitElements.setAttribute('class', `profit-section`)
    
    finalProfitElements.innerHTML = `<a>
    <p>Amount Invested: <span class="totalAmountInvested">INR: ${totalAmountInvested}</span></p>
    <p>Total Gain: <span class="totalAmountInvested">INR: ${totalGain}</span></p>
    <p>Final Amount: <span class="totalAmountInvested">INR: ${finalAmount}</span></p>
    </a>
    `
    finalProfitSection.appendChild(finalProfitElements)
}

function startNewActions(){
    
    play = true
    allInc = []
    startingSalary = 0
    percentageOfSalary = 0
    globalDecades = 0
    portfolioObj = []
    yearlyInvestAmountArray = []
    timePeriodVsIncrementObjectList = []
    salaryField.value = ''
    percentageField.value = ''
    durationInput.value = ''
    stepUpInput.value = ''
    
    validationTextField.innerHTML = ''
    removeExistingFinalProfitContent()
    removeExistingSalaryIncItem()
    removeExistingPortfolioItem()
    // disabledOneButton(startNewButton)
    enableOneButton(normalInvestCollectButton)
    enableOneButton(normalInvestModifyButton)
}

function getResultActions(){
    validationTextField.innerHTML = ''
    let allAttribute = getFinalProfit(portfolioObj, startingSalary, percentageOfSalary, timePeriodVsIncrementObjectList)
    if(allAttribute["validationStatus"] !== "Calculation Done"){
        showValidationResult(allAttribute["validationStatus"])
    }
    else{
        const itemWiseInfoList = allAttribute["itemWiseGainList"]
        const finalTotalAmount = Math.round(itemWiseInfoList.reduce( function (acc, current) {return acc + current["itemLevelTotal"]}, 0), 2)
        
        const amountInvested = Math.round(itemWiseInfoList.reduce( function (acc, current) {return acc + current["itemLevelInvestment"]}, 0), 2)

        const totalGain = Math.round(itemWiseInfoList.reduce( function (acc, current) {return acc + current["itemLevelGain"]}, 0), 2)
        // console.log(amountInvested, totalGain, finalTotalAmount);
        yearlyInvestAmountArray = []
        populateFinalProfitSection(amountInvested, totalGain, finalTotalAmount)
    }
    endGameFlag = true
    enableOneButton(startNewButton)
}

function validateNumber(num){
    if(isNaN(num) || num === ''){
        return false
    }
    else{
        return true
    }   
}

function addNewPlayButton(){
    enableOneButton(startNewButton)
    endGameFlag = true
}

function disabledOneButton(element){
    element.setAttribute('disabled', '')
    element.setAttribute('style', disabledButtonStyle)
}

function enableOneButton(element){
    element.removeAttribute('disabled', '')
    element.removeAttribute('style', disabledButtonStyle)
}

function showValidationResult(resultStatus){
    validationTextField.innerHTML = resultStatus
}

// Get expected return in every month for the time period
function getMfNav(expectedReturn, numberOfDecadeRange){
    const templateArray = new Array(numberOfDecadeRange * 10 * 12)
    const startingExpectedReturn = 10
    for (let index = 0; index < templateArray.length; index++) {
        if(index === 0){
            const element = startingExpectedReturn
            templateArray[index] = element
        }
        else{
            
            const mfNavValue = templateArray[index - 1] * (1 + (expectedReturn/100 * 1/12))
            // const element = Math.round(mfNavValue * 100000) / 100000
            const element = mfNavValue
            templateArray[index] = element
        }
    }
    return templateArray
}

// Populate invested amount in every month for the time period
function getYearlyInvestAmount(startingAmount, incVsTimeRange){
    let tempStartingSalary = startingAmount
    
    for (let index = 0; index < incVsTimeRange.length; index++) {
        const inc = incVsTimeRange[index]["incrementValue"]
        const timePeriod = arrayOfTimePeriod[index]["timeRange"]
        for (let innerIndex = 0; innerIndex < timePeriod; innerIndex++) {
            if(yearlyInvestAmountArray.length === 0){
                const salaryArrayForMonthly = new Array(12).fill(tempStartingSalary)
                yearlyInvestAmountArray = yearlyInvestAmountArray.concat(salaryArrayForMonthly)
            }
            else{
                tempStartingSalary = tempStartingSalary + (tempStartingSalary * inc) / 100
                const salaryArrayForMonthly = new Array(12).fill(tempStartingSalary)
                yearlyInvestAmountArray = yearlyInvestAmountArray.concat(salaryArrayForMonthly)
            }
        }
    }      
}

function getInvestAmountMonthlyBasis(itemPercentage, salaryPercent){
    let amountArray = []
    for (let index = 0; index < yearlyInvestAmountArray.length; index++) {
        const salaryInEachYear = yearlyInvestAmountArray[index]
        const itemWiseInvestmentPerItem = (salaryInEachYear * salaryPercent) / 100
        // const investAmountInEachMonth = Math.round(((itemPercentage * itemWiseInvestmentPerItem) / 100) * 100000) / 100000
        
        const investAmountInEachMonth = (itemPercentage * itemWiseInvestmentPerItem) / 100
        amountArray.push(investAmountInEachMonth)
    }
    return amountArray
}

function getExpectedItemReturn(itemPercentage, itemGrowth, salaryPercent){
    let itemLevelInvestment = 0
    const allMonthlyInvestment = getInvestAmountMonthlyBasis(itemPercentage, salaryPercent)
    const allMfNav = getMfNav(itemGrowth, globalDecades)
    let unitsArray = []
    let cumUnitsArray = []
    let momentValueArray = []
    const firstCumUnits = allMonthlyInvestment[0]/allMfNav[0]
    for (let index = 0; index < allMonthlyInvestment.length; index++) {
        if(index === 0){
            // const units = Math.round(allMonthlyInvestment[index] / allMfNav[index] * 1000) / 1000
            const units = allMonthlyInvestment[index] / allMfNav[index]
            unitsArray.push(units)
            cumUnitsArray.push(firstCumUnits)
            const momentValue = firstCumUnits * allMfNav[index]
            momentValueArray.push(momentValue)
        }
        else{
            // const units = Math.round(allMonthlyInvestment[index] / allMfNav[index] * 1000) / 1000
            const units = allMonthlyInvestment[index] / allMfNav[index]
            unitsArray.push(units)
            const cumUnits = cumUnitsArray[index - 1] + units
            cumUnitsArray.push(cumUnits)
            const momentValue = cumUnits * allMfNav[index]
            momentValueArray.push(momentValue)
        }
        itemLevelInvestment += allMonthlyInvestment[index]
    }
    
    return {
        itemLevelInvestment: itemLevelInvestment,
        itemLevelGain: momentValueArray[momentValueArray.length - 1] - itemLevelInvestment,
        itemLevelTotal: momentValueArray[momentValueArray.length - 1]
    }
    
}

function getFinalProfit(portfolioItemList, myStartingSalary, salaryPercentage, incVsTimeRange){
    let validationStatus = ""
    let itemWiseGainList = []
    if(incVsTimeRange.length === 0){
        validationStatus = "Please provide Step Up along with time period"
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
        // Accumulate yearly investment amount
        getYearlyInvestAmount(myStartingSalary, incVsTimeRange)
        // Get Portfolio item wise calculations
        for (let index = 0; index < portfolioItemList.length; index++) {
            const eachItemInPortfolio = portfolioItemList[index]
            const itemWiseAttributeObj = getExpectedItemReturn(eachItemInPortfolio["itemPercentage"], eachItemInPortfolio["expectedReturn"], salaryPercentage)
            eachItemInPortfolio["itemLevelInvestment"] = itemWiseAttributeObj["itemLevelInvestment"]
            eachItemInPortfolio["itemLevelGain"] = itemWiseAttributeObj["itemLevelGain"]
            eachItemInPortfolio["itemLevelTotal"] = itemWiseAttributeObj["itemLevelTotal"]
            itemWiseGainList.push(eachItemInPortfolio)

        }
        validationStatus = "Calculation Done"

    }
    
    return {
        validationStatus: validationStatus,
        itemWiseGainList: itemWiseGainList
    }
}
