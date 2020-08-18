import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import SearchIcon from '@material-ui/icons/Search';
import Recipe from "./Recipe";
import Alert from "./Alert";
import Footer from "./Footer";




function App() {
    
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const APP_ID = "a761e1a1";
    const APP_KEY = "bbc40acd65598ef7ec055cf5d9cf1a6d";

    const url = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    

    const getData = async () => {
        if (query !== "") {
        const result = await Axios.get(url);
        if (!result.data.more) {
            return setAlert("Please try again");
        }
        setRecipes(result.data.hits);
        console.log(result);
        setAlert("");
        setQuery("");
        } else {
            setAlert("Please type something")
        }
    }


    function handleChange(event) {
        setQuery(event.target.value);
    }
    
    
    function handleSubmit(event) {
        event.preventDefault();
        getData();
    };

   
    return (
        <div>
             <Header/>
            <div className="flexbox-container">
            <img src="/images/food-herbs.jpeg"/>
            <div>
              <form onSubmit={handleSubmit} className="search-box">
              {alert !== "" && <Alert alert={alert}/>}
                <input onChange={handleChange} type="text" name="box" placeholder="Search food..." value={query}></input>
                <button className="search-icon" type="submit" value="search"><SearchIcon/></button>
              </form>
            </div>
            </div>

            <div className="card-grid">
            {recipes !== [] && recipes.map(recipe =>
                        <Recipe 
                            key={uuidv4()}
                            recipe={recipe}
                
                        />
                )}
            </div>

        </div>

    );
}

export default App;