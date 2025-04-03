const main = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    console.log(id); 

    const $content = document.querySelector('.single_content');
    const response = await fetch(`https://dummyjson.com/recipes/${id}`); 
    const recipeData = await response.json();
    console.log(recipeData);

    $content.innerHTML = `
        <div class="item">
            <h1>${recipeData.name}</h1>
            <img src="${recipeData.image}" alt="${recipeData.name}" />
            <h3>Ingredientes:</h3>
            <ul>
                ${recipeData.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instrucciones:</h3>
            <p>${recipeData.instructions}</p>
        </div>
    `;
};

main();
