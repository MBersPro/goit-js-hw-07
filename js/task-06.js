const validationInputNode = document.querySelector("#validation-input");
const dataLengthValue = validationInputNode.dataset.length

validationInputNode.addEventListener("input", () =>{
    if(validationInputNode.value.length === Number(dataLengthValue)){
        validationInputNode.classList.add("valid")
        validationInputNode.classList.remove("invalid")
    }else{
        validationInputNode.classList.remove("valid")
        validationInputNode.classList.add("invalid")
    }
})