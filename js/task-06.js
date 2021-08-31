const validationInputNode = document.querySelector("#validation-input");
const dataLengthValue = validationInputNode.dataset.length

validationInputNode.addEventListener("input", () => {
    if (validationInputNode.value.length === Number(dataLengthValue)) {
        updateClass("valid", "invalid")
    } else {
        updateClass("ivalid", "valid")
    }
});

function updateClass(add, remove) {
    validationInputNode.classList.add(add);
    validationInputNode.classList.remove(remove);
}