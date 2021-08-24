const inputClass = document.querySelector("#validation-input")
const dataLengthClass = inputClass.getAttribute("data-length")
const check = (event) => {
    if(event.currentTarget.value.length === 6) {
        inputClass.classList.add("valid")
        inputClass.classList.remove("invalid")
    }else{
        inputClass.classList.add("invalid")
        inputClass.classList.remove("valid")
    }
}
inputClass.addEventListener("blur", check)  