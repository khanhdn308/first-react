import { useEffect, useRef, useState } from "react";
import "../../App.css";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";

export default function ChefClaudePage() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipeShown, setRecipeShown] = useState<boolean>(false);
    const recipeSection = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if(recipeSection.current && recipeShown)
        recipeSection.current.scrollIntoView({behavior: "smooth"});
    }, [recipeShown]);

  
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
          <IngredientsList ingredients={ingredients} onClick={toggleRecipeShown} ref={recipeSection} />
        )}
        {recipeShown && <Recipe />}
      </main>
    )
}
