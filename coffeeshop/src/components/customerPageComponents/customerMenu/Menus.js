import {Button, Grid, ListItem, ListItemAvatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

const Menus = ({menu}) => {

    return (
        // <article>
        //     <h2>{menu.name}</h2>
        //     <img src={menu.imageUrl}></img>
        //     <p>{menu.timestamp}</p>
        // </article>
        <Grid item xs={3}
              key={menu.id}
        >
            <Button
                // variant="contained"
                sx={{
                    borderRadius: 50,
                    display:'flex',
                    flexDirection: ' column',
                    width:264,
                    height:264,
                    paddingBottom:5,
                }}
            >

            <ListItemAvatar>

                <img
                    alt={menu.name}
                    src={menu.imageUrl}
                    style={{
                        height: 174,
                        width: 116,
                        objectFit: 'cover',
                    }}
                />

            </ListItemAvatar>
            <ListItemText
                primary={menu.name}
                sx={{
                    alignItems:'center'

                }}
            />
            </Button>
        </Grid>
    )
}
export default Menus;