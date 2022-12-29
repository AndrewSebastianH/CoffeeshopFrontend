import {List} from "@mui/material";
import React from "react";
import IngredientListItems from "./IngredientListItems";

const IngredientList = ({adminSearchResults}) => {
    const results = adminSearchResults?.map(ingredient => <IngredientListItems key={ingredient.id} ingredient={ingredient} />)
    const content = results?.length ? results : <article><p>No matching Ingredient</p></article>

    return (
        <main>
            {content}
        </main>
    )
}
export default IngredientList;