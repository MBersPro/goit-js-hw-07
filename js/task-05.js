const inputVariable = document.querySelector("#name-input")
const outputVariable = document.querySelector("#name-output")
inputVariable.addEventListener("input", () => {
    if (inputVariable.value === ""){
        outputVariable.textContent = "незнакомец"
    }else{
        outputVariable.textContent = inputVariable.value
    }
})