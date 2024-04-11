import React from 'react';
import { useSelector } from 'react-redux';
// import { remove } from '../store/recipeslice';
function Finder() {
  const recipes = useSelector(state => state.recipe);
// const dispatch=useDispatch();
// const removeitems=(recipeid)=>{
//   dispatch(remove(recipeid));
// }
  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <img src={recipe.strMealThumb} alt="#" />
          <h5>{recipe.strMeal}</h5>
           <button >Remove from cart</button> 
        </div>
      ))}
    </div>
  );
}

export default Finder;

