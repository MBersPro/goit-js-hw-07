const variable_li = document.querySelectorAll("li.item")
console.log(`В списке ${variable_li.length} категории.`)
variable_li.forEach(item => {   
    const h2_Node = item.querySelector("h2").textContent
    const li_Node = item.querySelectorAll("li").length
    console.log(`Категория: ${h2_Node}`)
    console.log(`Количество элементов: ${li_Node}`)
})
