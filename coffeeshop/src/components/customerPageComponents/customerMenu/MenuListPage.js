import {Grid, List} from "@mui/material";
import React from "react";
import Menus from "./Menus";

const MenuListPage = ({searchResults}) => {
    const results = searchResults?.map(menu => <Menus key={menu.id} menu={menu}/>)
    const content = results?.length ? results : <article><p>No matching menu</p></article>

    return (
        <main>
            <Grid
                container
                spacing={2}
            >
            {content}
            </Grid>
        </main>
    )
}
export default MenuListPage;