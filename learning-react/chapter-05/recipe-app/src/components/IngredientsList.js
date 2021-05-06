import Ingredients from './Ingredients'

const IngredientsList = ({list}) =>
    <ul className="ingredients">
        {list.map((ingredient, i) => 
            <Ingredients key={i} {...ingredient}/>
        )}
    </ul>

export default IngredientsList;