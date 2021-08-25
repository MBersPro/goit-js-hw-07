const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ingredientsNode = document.querySelector("#ingredients");
const mas = ingredients.map(item => {
    const liNode = document.createElement("li");
    liNode.textContent = item;
    return liNode;
})
ingredientsNode.append(...mas);
