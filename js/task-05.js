const nameInputNode = document.querySelector("#name-input");
const nameOutputNode = document.querySelector("#name-output");
nameInputNode.addEventListener("input", () => {
if(nameInputNode.value === ""){
    nameOutputNode.textContent = "незнакомец"
}else{
    nameOutputNode.textContent = nameInputNode.value
}
})