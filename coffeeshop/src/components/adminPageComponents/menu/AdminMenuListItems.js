import {Alert, Button, ButtonGroup, Divider, IconButton, ListItem, ListItemAvatar, Snackbar} from "@mui/material";
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
import EditMenu from "./EditMenu";

const AdminMenuListItems = ({menu}) => {

    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [select, setSelect] = useState({});

    const handleClickOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};

    return (
        <List>
            <ListItem
                divider="true"
                key={menu.id}
            >
                <ListItemAvatar>
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
                    secondary={`Last Updated at `+ menu.updatedAt}
                />
                <ButtonGroup>
                    <IconButton
                        onClick={() => {
                            setSelect(menu)
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
                            setSelect(menu)
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
                    {"Delete menu"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this menu?
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
                                await axios.delete(`http://localhost:8080/menu/${select._id}`)
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
                    Edit Menu Details
                </DialogTitle>
                <Divider/>
                <DialogContent>
                    <EditMenu item={select}/>
                </DialogContent>
            </Dialog>
        </List>

    )
}
export default AdminMenuListItems;