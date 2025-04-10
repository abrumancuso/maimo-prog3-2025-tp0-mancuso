const main = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    console.log(id);

    const $content = document.querySelector('.single_content');
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipeData = await response.json();
    console.log(recipeData);


    $content.innerHTML = `
        <h1>${recipeData.name}</h1>
        <img src="${recipeData.image}" alt="${recipeData.name}" />

        <h2>Ingredientes</h2>
        <ul>
            ${recipeData.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>

        <h2>Instrucciones</h2>
        <p>${recipeData.instructions.join(" ")}</p>

        <div class="food_info">
            <p>Cocina: ${recipeData.cuisine}</p>
            <p>Dificultad: ${recipeData.difficulty}</p>
            <p>Tiempo de preparación: ${recipeData.prepTimeMinutes} minutos</p>
            <p>Tiempo de cocción: ${recipeData.cookTimeMinutes} minutos</p>
            <p>Cantidad de porciones: ${recipeData.servings}</p>
            <p>Calorías por porción: ${recipeData.caloriesPerServing}</p>
            <p>Tipo de comida: ${recipeData.mealType.join(", ")}</p>
            <p>Valoración: ${recipeData.rating}⭐</p>
            <p>En esta receta: ${recipeData.tags.join(", ")}</p>
        </div>
    `;

};


main();

