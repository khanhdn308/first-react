import { useState } from 'react';
import './App.css'


export default function Page() {
  const [ingredients, setIngredients] = useState<string[]>(['flour', 'sugar']);

  function addIngredients(formData: FormData) {
    const ingredient = formData.get('ingredient');
    if(ingredient) {
      setIngredients(prev => {
        return [...prev, ingredient.toString()];
      });
    }
  }

  return (
    <main>
      <form className='ingredient-form' action={addIngredients}>
        <input name='ingredient' type='text' placeholder='Your ingredient' aria-label='Add ingredient' />
        <button type='submit'>Add Ingredient</button>
      </form>
      <ul>
        {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
      </ul>
    </main>
  )
}
