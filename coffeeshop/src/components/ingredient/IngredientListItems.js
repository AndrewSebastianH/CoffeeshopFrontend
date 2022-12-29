import {Button, ButtonGroup, Divider, IconButton, ListItem, ListItemAvatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import React, {useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import {List} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import axios from "axios";
import EditIngredient from "./EditIngredient";

const IngredientListItems = ({ingredient}) => {

    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const [select, setSelect] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <List>
            <ListItem
                divider="true"
                key={ingredient.id}
            >
                <ListItemAvatar>
                    <img
                        alt={ingredient.name}
                        src={ingredient.imageUrl}
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
                    primary={ingredient.name}
                    secondary={`Last Updated at `+ ingredient.updatedAt}
                />
                <ButtonGroup>
                    <IconButton
                        onClick={() => {
                            setSelect(ingredient)
                            setOpenEdit(true)
                        }}
                        sx={{
                            padding: 2
                        }}
                    >
                        <EditIcon
                            color="secondary"
                            sx={{
                                fontSize:30
                            }}
                        />
                    </IconButton>
                    <IconButton
                        variant='contained'
                        onClick={()=> {
                            handleClickOpen()
                            setSelect(ingredient)
                        }}
                        sx={{
                            padding: 2
                        }}
                    >
                        <DeleteIcon color="error" sx={{fontSize: 30}} />
                    </IconButton>
                </ButtonGroup>
            </ListItem>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete ingredient"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this ingredient?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button
                        color="error"
                        onClick={

                            async () => {
                                await axios.delete(`http://localhost:8080/ingredients/${select._id}`)
                                    .then(res => {
                                        console.log(res.status)
                                        window.location.reload()
                                        alert(`${select.name} is successfully deleted.`)
                                    })
                                    .catch(err => {
                                        console.log(err)
                                    })
                            }
                        }
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                fullWidth="lg"
                open={openEdit}
                onClose={() => {
                    setOpenEdit(false)
                }}
            >
                <DialogTitle>
                    Edit Ingredient Details
                </DialogTitle>
                <Divider/>
                <DialogContent>
                    <EditIngredient item={select}/>
                </DialogContent>
            </Dialog>
        </List>

    )
}
export default IngredientListItems;