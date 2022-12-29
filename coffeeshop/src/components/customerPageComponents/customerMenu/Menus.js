import {ListItem, ListItemAvatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

const Menus = ({ menu }) => {
    return (
        // <article>
        //     <h2>{menu.name}</h2>
        //     <img src={menu.imageUrl}></img>
        //     <p>{menu.timestamp}</p>
        // </article>
        <ListItem
            divider="true"
            key={menu.id}
        >
            <ListItemAvatar >
                <img
                    alt={menu.name}
                    src={menu.imageUrl}
                    style={{
                        height: 154,
                        width: 86,
                        objectFit: 'cover',
                        paddingLeft: 10,
                        paddingRight: 50
                    }}
                />
            </ListItemAvatar>
            <ListItemText
                primary={menu.name}
                secondary={menu.timestamp}
            />
        </ListItem>
    )
}
export default Menus;