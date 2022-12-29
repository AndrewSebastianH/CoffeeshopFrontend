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
import {getAdminMenuItems} from "../data/adminMenuItems";
import {getIngredientItems} from "../data/ingredientItems";
import IngredientList from "../components/ingredient/IngredientList";


function Ingredient() {

    const [openAdd, setOpenAdd] = useState(false);

    const [adminIngredient, setAdminIngredient] = useState([])
    const [adminIngredientSearchResults, setAdminIngredientSearchResults] = useState()

    useEffect(() => {
        getIngredientItems().then(json => {
            setAdminIngredient(json)
            return json
        }).then(json => {
            setAdminIngredientSearchResults(json)
        })
    }, [])

    const [open, setOpen] = useState(false);

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
                    <IngredientListToolbar ingredient={adminIngredient} setIngredientSearchResults={setAdminIngredientSearchResults} />
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
                                        subheader={`${adminIngredient.length} ingredient items in total.`}
                                        title="Ingredient List"
                                    />
                                    <Divider/>
                                    <IngredientList adminSearchResults={adminIngredientSearchResults} />
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