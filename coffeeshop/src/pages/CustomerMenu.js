import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {getMenuItems} from "../data/menuItems";
import coffeePic from "../assets/coffeePic.jpg"

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
    Grid, Paper, Toolbar
} from '@mui/material'

import {CustomerMenuToolbar} from "../components/customerPageComponents/customerMenu/CustomerMenuToolbar";
import MenuListPage from "../components/customerPageComponents/customerMenu/MenuListPage";

import CustomerTopDrawer from "../components/customerPageComponents/navbar/CustomerTopDrawer";

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
            <Paper
                elevation={2}
                sx={{
                    margin: -1,
                    paddingTop: -1,
                    backgroundImage: `url(${coffeePic})`,
                    backgroundPosition: '0px 850px',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    height: '60vh'
                }}
            >
                <Box
                    sx={{
                        py:20,
                        px: 20
                    }}
                >
                    <Grid sx={{ flexGrow: 1 }} container justifyContent="start" alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h2" gutterBottom>
                                Welcome to Gamau Coffee
                            </Typography>
                        </Grid>
                        <Typography variant="subtitle1">
                            Your best place to order coffee even when you dont want to
                        </Typography>
                    </Grid>
                </Box>
            </Paper>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 6,
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
                            sx={{ m: 1, p: 1}}
                            variant="h4"
                        >
                            Menu
                        </Typography>

                    </Box>
                    <CustomerMenuToolbar menu={menu} setSearchResults={setSearchResults}/>
                    <Box sx={{pt: 3, display: 'flex'}}>
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
                                        title="Drinks"
                                    />
                                    <Divider/>
                                    <MenuListPage searchResults={searchResults} />
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