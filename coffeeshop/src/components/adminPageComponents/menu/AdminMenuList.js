import {List} from "@mui/material";
import React from "react";
import AdminMenuListItems from "./AdminMenuListItems";

const AdminMenuList = ({adminSearchResults}) => {
    const results = adminSearchResults?.map(menu => <AdminMenuListItems key={menu.id} menu={menu}/>)
    const content = results?.length ? results : <article><p>No matching menu</p></article>

    return (
        <main>
            {content}
        </main>
    )
}
export default AdminMenuList;