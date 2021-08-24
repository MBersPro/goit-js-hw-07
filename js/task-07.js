const inputClass = document.querySelector("#font-size-control")
const textClass = document.querySelector("#text")
textClass.style.fontSize = "50px"
const controlFunc = () => {
    const controlValue = inputClass.value
    textClass.style.fontSize = `${controlValue}px`
}
inputClass.addEventListener("input", controlFunc)