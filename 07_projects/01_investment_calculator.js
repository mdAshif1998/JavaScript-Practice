const formServiceDecades = document.querySelector(".form-service-decades")
const validationField = document.querySelector("#validation")
const validationTextField = document.querySelector('.validation-result')
const decadeWiseIncrementField = document.querySelector(".form-decade-wise-increment")
const insideIncrementCard = document.querySelector("#decade-wise-increment")
const submitButton = document.querySelector('#subt')
const decadeField = document.querySelector('#decadeField')
let allInc = []
let play = true
let incFieldCreation = false

if(play){
    formServiceDecades.addEventListener('submit', function(e){
        e.preventDefault()
        const decades = parseInt(decadeField.value)
        if(validateNumber(decades)){
            addIncrementFieldForUserInput(decades)
            addDecadeIncSubmitButton()
            incFieldCreation = true
            incFieldOperation(incFieldCreation, decades)
            submitButton.setAttribute('disabled', '')
            decadeField.setAttribute('disabled', '')
        }
        else{
            submitButton.setAttribute('disabled', '')
            decadeField.setAttribute('disabled', '')
            addNewPlayButton()
        }  
    })
}


function addIncrementFieldForUserInput(numberOfDecade){
    
    for (let index = 0; index < numberOfDecade; index++) {
        const incrementField = document.createElement('input')
        incrementField.setAttribute('placeholder', `${index + 1} Inc`)
        incrementField.setAttribute('type', 'text')
        incrementField.setAttribute('class', `inc-${index + 1}`)
        incrementField.style.cssText = `color: #000; width: 50px; height: 40px; 
                                        font-size: 30px; border style: none; 
                                        margin-top: 10px; border: 2px solid #6c6d6d; 
                                        border-radius: 10px; text-align: center; font-size: 10px; margin-left: 10px`
                                        insideIncrementCard.appendChild(incrementField)

    }
    
}

function addDecadeIncSubmitButton(){
    const button = document.createElement('input')
    button.setAttribute('type', `Submit`)
    button.setAttribute('value', `Submit`)
    button.setAttribute('id', `${submitButton.getAttribute('id')}`)
    button.setAttribute('class', 'decadeIncSubmit')
    button.style.cssText = "margin-left: 10px"
    insideIncrementCard.appendChild(button)

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

function incFieldOperation(incFieldFlag, decades){
    decadeWiseIncrementField.addEventListener('submit', function(e){
        e.preventDefault()
        if(incFieldFlag){
            const decadeInValues = insideIncrementCard.querySelectorAll('input')
            const decadeIncSubmitButton = insideIncrementCard.querySelector('.decadeIncSubmit')
            for (let index = 0; index < decades; index++) {
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
            console.log(allInc);
        }
    })
}

function addNewPlayButton(){
    const button = document.createElement('input')
    button.setAttribute('type', `Submit`)
    button.setAttribute('value', `Start New`)
    button.setAttribute('id', `${submitButton.getAttribute('id')}`)
    button.setAttribute('class', 'newTry')
    button.style.cssText = "margin-left: 10px"
    validationField.appendChild(button)
    endGame()
}

function endGame(){
    play = false
    const newGameButton = document.querySelector('.newTry')
    validationField.addEventListener('click', function(e){
        play = true
        allInc = []
        decadeField.value = ''
        submitButton.removeAttribute('disabled', '')
        decadeField.removeAttribute('disabled', '')
        if(incFieldCreation){
            const incInputField = insideIncrementCard.querySelectorAll('input')
                incInputField.forEach(function(field){
                    field.remove()
                })
        }
        validationTextField.innerHTML = ''
        validationField.removeChild(newGameButton)

    })
}
