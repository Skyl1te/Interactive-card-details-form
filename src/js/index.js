const cardFrontNum = document.querySelector('.card-front__card-num')
const cardFrontName = document.querySelector('.card-front__card-name')
const cardFrontDate = document.querySelector('.card-front__card-date')
const cardBackCVC = document.querySelector('.card-back__cvc')

const numberInput = document.querySelector('.number__input')
const holderInput = document.querySelector('.holder__input')
const monthInput = document.querySelector('.exp-date-mm')
const yearInput = document.querySelector('.exp-date-yy')
const cvcInput = document.querySelector('.cvc__input')

const MAX_NUMBER_LENGTH = 16
const MAX_NAME_LENGTH = 50
const MAX_MM_LENGTH = 2
const MAX_YY_LENGTH = 2
const MAX_CVC_LENGTH = 3

function inputNumber() {
    limitInputLength(numberInput, MAX_NUMBER_LENGTH)
    cardFrontNum.textContent = numberInput.value
    checkInput(numberInput.value, 'number')
}

function inputHolder() {
    limitInputLength(holderInput, MAX_NAME_LENGTH)
    cardFrontName.textContent = holderInput.value
    checkInput(holderInput.value, 'name')
}

function inputDate() {
	if (monthInput.value > 12 || monthInput.value < 0) {
		monthInput.value= 0
	}
	limitInputLength(monthInput, MAX_MM_LENGTH) 
    limitInputLength(yearInput, MAX_YY_LENGTH)  
    cardFrontDate.textContent = `${monthInput.value}/${yearInput.value}`
    
    checkInput(monthInput.value, 'exp-date-mm')
    checkInput(yearInput.value, 'exp-date-yy')
}

function inputCVC() {
    limitInputLength(cvcInput, MAX_CVC_LENGTH)
    cardBackCVC.textContent = cvcInput.value
    checkInput(cvcInput.value, 'cvc')
}


function checkInput(inputVal, el) {
	if (inputVal.trim() == '') {
		
		switch (true) {
			case el == 'number':
				cardFrontNum.textContent = '0000 0000 0000 0000'
				break
			case el == 'name':
				cardFrontName.textContent = 'Jane Appleseed'
				break
			case el == 'exp-date-mm':
				cardFrontDate.textContent = `00/${yearInput.value}`
				break
			case el == 'exp-date-yy':
				cardFrontDate.textContent = `${monthInput.value}/00`
				break
			
			default:
				cardBackCVC.textContent = '000'
				break
		}
	}
}

function limitInputLength(input, inputlength) {
	if (input.value.length > inputlength) {
		input.value = input.value.slice(0, inputlength)
	}
}
