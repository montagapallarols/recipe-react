import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";



function Recipe({recipe}) {
    
    const {label, image, url, ingredients} = recipe.recipe;
    const [show, setShow] = useState(false);


    
    return (
            
        <div className="container-fluid d-flex justify-content-center">
            <div className="card text-center">

                <div className="overflow">
                    <img className="card-img-top" src={image} alt={label}></img>
                </div>
                <div className="card-body card-dark">
                    <h2 className="card-title">{label}</h2>
                    <a href ={url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">View Recipe</a>
                    <button className="btn btn-outline-success" onClick={() => setShow(!show)}>Ingredients</button>
                    {show && <RecipeDetails ingredients={ingredients}/>}     
                </div>

            </div>
        </div>
            
    );
}


export default Recipe; 

