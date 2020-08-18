import React from "react";
import { v4 as uuidv4 } from 'uuid';


function RecipeDetails({ingredients}) {
    
    return ingredients.map(ingredient => {
        
        return (
            <div>
            <ul className="ingredients-list" key={uuidv4()}>
            <li className="ingredients-text">
            {ingredient.text}</li>
                
            </ul>
            </div>
    );
    });
        
};

export default RecipeDetails;