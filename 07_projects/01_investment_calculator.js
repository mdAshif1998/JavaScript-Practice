const formServiceDecades = document.querySelector(".form-service-decades")
const validationField = document.querySelector(".validation-result")
const decadeWiseIncrementField = document.querySelector(".form-decade-wise-increment")
const submitButton = document.querySelector('#subt')
let allInc = []

formServiceDecades.addEventListener('submit', function(e){
    e.preventDefault()
    const decades = parseInt(document.querySelector('#decadeField').value)
    
    if(validateNumber(decades)){
        validationField.innerHTML = ''
        addIncrementFieldForUserInput(decades)
        addDecadeIncSubmitButton()
        e.stopPropagation()
        const decadeInValues = decadeWiseIncrementField.querySelectorAll('input')
        decadeWiseIncrementField.addEventListener('submit', function(e){
            e.preventDefault()
            for (let index = 0; index < decades; index++) {
                const incValue = parseInt(decadeInValues[index].value)
                if (validateNumber(incValue)){
                    allInc.push(incValue)
                }
                else{
                    break
                }
                
            }
            console.log(allInc);
            e.stopPropagation()
            })
    }
    else{
        console.log("Enter a valid decade")
    }
    
})


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
        decadeWiseIncrementField.appendChild(incrementField)

    }
    
}

function addDecadeIncSubmitButton(){
    const button = document.createElement('input')
    button.setAttribute('type', `Submit`)
    button.setAttribute('value', `Submit`)
    button.setAttribute('id', `${submitButton.getAttribute('id')}`)
    button.setAttribute('class', 'decadeIncSubmit')
    button.style.cssText = "margin-left: 10px"
    decadeWiseIncrementField.appendChild(button)
}

function validateNumber(num){
    if(isNaN(num) || num === ''){
        validationField.innerHTML = `Please give a valid number`
        return false
    }
    else{
        return true
    }
    
}
