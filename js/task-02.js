const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul_Node = document.querySelector("#ingredients")
const variable_Map = ingredients.map(item => {
    const li_Node = document.createElement("li")
    li_Node.textContent = item
    return li_Node
})
ul_Node.append(...variable_Map)