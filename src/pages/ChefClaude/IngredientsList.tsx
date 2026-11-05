
export default function IngredientsList(props: { ingredients: string[], onClick: () => void, ref?: React.RefObject<HTMLDivElement | null> }) {
    const { ingredients, onClick, ref } = props;
    
    return (
        <section>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            {ingredients.length >= 3 && (
            <div>
                <div ref={ref}>
                    <h3>Ready for recipe</h3>
                    <p>Click the button below to get a recipe based on your ingredients.</p>
                </div>
                <button onClick={onClick}>Get Recipe</button>
            </div>
            )}       
        </section>
    )
}