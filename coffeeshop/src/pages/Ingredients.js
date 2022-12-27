import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {format, formatDistanceToNow, subHours} from 'date-fns';
import {
    Container,
    Card,
    IconButton,
    Button,
    ButtonGroup,
    Box,
    Typography,
    Stack,
    Modal,
    CardContent, Divider, List, ListItem, ListItemAvatar, CardHeader, Grid
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from "@mui/material/ListItemText";

import {IngredientListToolbar} from "../components/ingredient/IngredientListToolbar";
import EditIngredient from "../components/ingredient/EditIngredient";
import AddIngredient from "../components/ingredient/AddIngredient";
import AdminTopDrawer from "../components/navbar/AdminTopDrawer";


function Ingredient() {

    const [ingredients, setIngredients] = useState([])
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [select, setSelect] = useState({});
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        axios.get('http://localhost:8080/ingredients/')
            .then(res => {
                console.log(res)
                setIngredients(() => res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <AdminTopDrawer/>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 12,
                    margin: -1,
                    height:'100vh',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                }}
            >
                <Container maxWidth={false}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            m: 0
                        }}
                    >
                        <Typography
                            sx={{m: 1}}
                            variant="h4"
                        >
                            Ingredients
                        </Typography>
                        <Box sx={{m: 1}}>
                            <Button
                                onClick={() => {
                                    setOpenAdd(true)
                                }}
                                color="primary"
                                variant="contained"
                            >
                                Add new Ingredient
                            </Button>
                            <Dialog
                                fullWidth="lg"
                                open={openAdd}
                                onClose={() => {
                                    setOpenAdd(false)
                                }}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <DialogTitle>
                                    Add a new Ingredient
                                </DialogTitle>
                                <Divider/>
                                <DialogContent>
                                    <AddIngredient/>
                                </DialogContent>
                            </Dialog>
                        </Box>
                    </Box>
                    <IngredientListToolbar/>
                    <Box sx={{pt: 3}}>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                lg={12}
                                sm={12}
                                xl={12}
                                xs={12}
                            >
                                <Card>
                                    <CardHeader
                                        subheader={`${ingredients.length} ingredient items in total.`}
                                        title="Ingredient List"
                                    />
                                    <Divider/>
                                    <List>
                                        {ingredients.map((item, idx) => (
                                            <ListItem
                                                divider={idx < item.length - 1}
                                                key={item.id}
                                            >
                                                <ListItemAvatar>
                                                    <img
                                                        alt={item.name}
                                                        src={item.imageUrl}
                                                        style={{
                                                            height: 128,
                                                            width: 68,
                                                            objectFit: 'cover',
                                                            paddingLeft: 10,
                                                            paddingRight: 50
                                                        }}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={item.name}
                                                    secondary={`Last updated at ` + item.updatedAt}
                                                />
                                                <ButtonGroup>
                                                    <IconButton>
                                                        <EditIcon
                                                            onClick={() => {
                                                                setSelect(item)
                                                                setOpenEdit(true)
                                                            }}
                                                        />
                                                    </IconButton>
                                                    <IconButton
                                                        variant='contained'
                                                        onClick={handleClickOpen}
                                                    >
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </ButtonGroup>
                                            </ListItem>
                                        ))
                                        }
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {"Delete item"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    Are you sure you want to delete this item?
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose}>
                                                    Cancel
                                                </Button>
                                                <Button
                                                    onClick={async () => {
                                                        await axios.delete(`http://localhost:8080/ingredients/${select._id}`)
                                                            .then(res => {
                                                                console.log(res.status)
                                                                window.location.reload()
                                                            })
                                                            .catch(err => {
                                                                console.log(err)
                                                            })
                                                    }}
                                                    sx={{}}
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
                                    <Divider/>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Ingredient;