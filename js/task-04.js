const decrementBtnNode = document.querySelector("#decrementBtn");
const incrementBtnNode = document.querySelector("#incrementBtn");
const valueNode = document.querySelector("#value")

let valueNumber = Number(valueNode.textContent)

const decrementFunc = () => valueNode.textContent = valueNumber -= 1;
const incrementFunc = () => valueNode.textContent = valueNumber += 1;

decrementBtnNode.addEventListener("click", decrementFunc);
incrementBtnNode.addEventListener("click", incrementFunc);