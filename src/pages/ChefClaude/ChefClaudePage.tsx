import { useState } from "react";
import "../../App.css";
import Recipe from "./Recipe";

export default function ChefClaudePage() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipeShown, setRecipeShown] = useState<boolean>(false);
  
    function addIngredients(formData: FormData) {
      const ingredient = formData.get('ingredient');
      if(ingredient) {
        setIngredients(prev => {
          return [...prev, ingredient.toString()];
        });
      }
    }

    function toggleRecipeShown() {
        setRecipeShown(prev => !prev);
    }
  
    return (
      <main>
        <form className='ingredient-form' action={addIngredients}>
          <input name='ingredient' type='text' placeholder='Your ingredient' aria-label='Add ingredient' />
          <button type='submit'>Add Ingredient</button>
        </form>
        {ingredients.length > 0 && (
        <section>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            {ingredients.length >= 3 && (
            <div>
                <div>
                    <h3>Ready for recipe</h3>
                    <p>Click the button below to get a recipe based on your ingredients.</p>
                </div>
                <button onClick={toggleRecipeShown}>Get Recipe</button>
            </div>
            )}       
        </section>
        )}
        {recipeShown && <Recipe />}
      </main>
    )
}
