import React, { useState } from 'react';
import axios from 'axios';
import '../mainpage/instagram.css';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {add} from '../store/recipeslice';
function Instagram() {
  const dispatch=useDispatch();
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const searchRecipes = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
      setRecipes(response.data.meals || []); // Ensure response.data.meals is an array or set an empty array
    } catch (error) {
      console.error('Error searching recipes:', error);
      // Handle error
    }
    setQuery('')
  };

  
  const handleadd=(recipe)=>{
dispatch(add(recipe));
  }

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search recipes..."
          className="search-input"
          value={query}
          onChange={handleSearch}
        />
        <button className="search-button" onClick={searchRecipes}>Search</button>
        <Link to='/Finder' className='finder'>Saved Recipes</Link>
      </div>
      <main className="recipes">
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className='recipe' />
            <h5>{recipe.strMeal}</h5>
            <button onClick={handleadd(recipe)}>Add To finder</button>

            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Instagram;
