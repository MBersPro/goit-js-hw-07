const counterValue = document.querySelector('#value')
const decrementBtn = document.querySelector('#decrementBtn')
const incrementBtn = document.querySelector('#incrementBtn')
const incrementFunc = () => counterValue.textContent =+ counterValue.textContent + 1
incrementBtn.addEventListener('click', incrementFunc)
const decrementFunc = () => counterValue.textContent =+ counterValue.textContent - 1
decrementBtn.addEventListener('click', decrementFunc)