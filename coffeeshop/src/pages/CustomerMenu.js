import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {getMenuItems} from "../data/menuItems";

import {
    Container,
    Card,
    IconButton,
    Button,
    ButtonGroup,
    Box,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    CardHeader,
    Grid
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ListItemText from "@mui/material/ListItemText";
import {CustomerMenuToolbar} from "../components/customerPageComponents/customerMenu/CustomerMenuToolbar";
import MenuListPage from "../components/customerPageComponents/customerMenu/MenuListPage";

import CustomerTopDrawer from "../components/adminPageComponents/navbar/CustomerTopDrawer";

function CustomerMenu(){
    const [menu, setMenu] = useState([])
    const [searchResults, setSearchResults] = useState()

    useEffect(() => {
        getMenuItems().then(json => {
            setMenu(json)
            return json
        }).then(json => {
            setSearchResults(json)
        })
    }, [])

    return (
        <>
            <CustomerTopDrawer/>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 12,
                    margin: -1,
                    height: '100vh',
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
                            sx={{ m: 1}}
                            variant="h4"
                        >
                            Menu
                        </Typography>
                    </Box>

                    <CustomerMenuToolbar menu={menu} setSearchResults={setSearchResults}/>

                    <Box sx={{ pt : 3, display: 'flex'}}>
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
                                        subheader={`${menu.length} menu items in total.`}
                                        title="Menu List"
                                    />
                                    <Divider/>
                                    <MenuListPage searchResults={searchResults} />
                                    {/*<List>*/}
                                    {/*    {menu.map((item, idx) => (*/}
                                    {/*        <ListItem*/}
                                    {/*            divider={idx < item.length - 1}*/}
                                    {/*            key={item.id}*/}
                                    {/*        >*/}
                                    {/*            <ListItemAvatar >*/}
                                    {/*                <img*/}
                                    {/*                    alt={item.name}*/}
                                    {/*                    src={item.imageUrl}*/}
                                    {/*                    style={{*/}
                                    {/*                        height: 154,*/}
                                    {/*                        width: 86,*/}
                                    {/*                        objectFit: 'cover',*/}
                                    {/*                        paddingLeft: 10,*/}
                                    {/*                        paddingRight: 50*/}
                                    {/*                    }}*/}
                                    {/*                />*/}
                                    {/*            </ListItemAvatar>*/}
                                    {/*            <ListItemText*/}
                                    {/*                primary={item.name}*/}
                                    {/*            />*/}
                                    {/*        </ListItem>*/}
                                    {/*    ))*/}
                                    {/*    }*/}
                                    {/*</List>*/}
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

export default CustomerMenu