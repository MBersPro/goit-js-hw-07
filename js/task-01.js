const itemNodes = document.querySelectorAll(".item");
console.log(`В списке ${itemNodes.length} категории.`)

itemNodes.forEach(item => {
    const h2Node = item.querySelector("h2").textContent;
    const liNodes = item.querySelectorAll("li").length;
    console.log(`Категория: ${h2Node}`)
    console.log(`Количество элементов: ${liNodes}`)
})