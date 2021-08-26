const fontSizeControlNode = document.querySelector("#font-size-control");
const textNode = document.querySelector("#text");
fontSizeControlNode.setAttribute("min", "14");
fontSizeControlNode.setAttribute("max", "58");
textNode.style.fontSize = "50px"
fontSizeControlNode.addEventListener("input", () => {

    textNode.style.fontSize = `${fontSizeControlNode.value}px`
});
