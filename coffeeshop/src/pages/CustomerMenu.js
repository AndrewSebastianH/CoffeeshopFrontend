import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {
    Avatar, Grid, Container, Card, IconButton, Button, ButtonGroup, Box, Typography, Stack, Modal, CardContent, Divider
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import MenuItem from '../models/MenuItem';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import EditMenu from '../components/menu/EditMenu';

function CustomerMenu() {

    const style = {
        backgroundColor: 'gray', fontFamily: 'inter', padding: '1rem', margin: '0 0 1rem 0', color: 'white',

    }

    const [menu, setMenu] = useState([])

    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const [select, setSelect] = useState({});

    function handleClickOpen() {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        axios.get('http://localhost:8080/menu/')
            .then(res => {
                console.log(res)
                setMenu(() => res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (<Container maxWidth={false}>
            <Grid
                container
                spacing={3}
            >
                {menu.map((item, idx) => (<Grid
                        item
                        key={idx}
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <Card>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex', justifyContent: 'center', pb: 3
                                    }}
                                >
                                    <Avatar
                                        alt="AdminMenu Picture"
                                        src={item.imageUrl}
                                        variant="square"
                                        sx={{
                                            height: 225, width: 175
                                        }}
                                    />
                                </Box>
                                <Typography
                                    align="center"
                                    color="textPrimary"
                                    gutterBottom
                                    variant="h5"
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    align="center"
                                    color="textPrimary"
                                    variant="body1"
                                >
                                    {item.description}
                                </Typography>
                                <Typography
                                    align="center"
                                    color="textPrimary"
                                    gutterBottom
                                    variant="h5"
                                >
                                    IDR {item.basePrice} K
                                </Typography>
                            </CardContent>
                            <Box sx={{flexGrow: 1}}/>
                            <Divider/>
                            <Box sx={{p: 2}}>
                                <Grid
                                    container
                                    spacing={2}
                                    sx={{justifyContent: 'space-between'}}
                                >
                                    <Grid
                                        item
                                        sx={{
                                            alignItems: 'center', display: 'flex'
                                        }}
                                    >
                                        <Typography
                                            color="textSecondary"
                                            display="inline"
                                            sx={{pl: 1}}
                                            variant="body2"
                                        >
                                            Updated 2hr ago
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        sx={{
                                            alignItems: 'center', display: 'flex'
                                        }}
                                    >
                                        {/*ini mungkin bisa diganti ke "times bought"*/}

                                        {/*<DownloadIcon color="action" />*/}
                                        {/*<Typography*/}
                                        {/*  color="textSecondary"*/}
                                        {/*  display="inline"*/}
                                        {/*  sx={{ pl: 1 }}*/}
                                        {/*  variant="body2"*/}
                                        {/*>*/}
                                        {/*  {product.totalDownloads}*/}
                                        {/*  {' '}*/}
                                        {/*  Downloads*/}
                                        {/*</Typography>*/}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Card>
                        {/*<Card*/}
                        {/*    key={idx}*/}
                        {/*    sx={style}>*/}

                        {/*    <Box sx={{*/}
                        {/*        display: 'flex',*/}
                        {/*        justifyContent: 'space-between',*/}
                        {/*        alignItems: 'center'*/}
                        {/*    }}>*/}

                        {/*        <Stack direction="row" spacing={2}>*/}
                        {/*            <Box*/}
                        {/*                component="img"*/}
                        {/*                sx={{*/}
                        {/*                    height: '125px',*/}
                        {/*                    width: '125px',*/}
                        {/*                    objectFit: 'cover',*/}
                        {/*                    borderRadius: '5px'*/}

                        {/*                }}*/}
                        {/*                src={menu_1}*/}
                        {/*            />*/}
                        {/*            <Stack>*/}
                        {/*                <Typography variant='h4'>*/}
                        {/*                    {item.name}*/}
                        {/*                </Typography>*/}
                        {/*                <Typography variant='p'>*/}
                        {/*                    {item.description}*/}
                        {/*                </Typography>*/}
                        {/*                <Typography variant='p'>*/}
                        {/*                    IDR {item.basePrice} K*/}
                        {/*                </Typography>*/}
                        {/*            </Stack>*/}
                        {/*        </Stack>*/}

                        {/*        <ButtonGroup>*/}
                        {/*            <IconButton>*/}
                        {/*                <EditIcon*/}
                        {/*                    onClick={() => {*/}
                        {/*                        setSelect(item)*/}
                        {/*                        setOpenEdit(true)*/}
                        {/*                    }}*/}
                        {/*                />*/}
                        {/*            </IconButton>*/}
                        {/*            <IconButton variant='contained'*/}
                        {/*                        onClick={() => {*/}
                        {/*                            setOpen(true)*/}
                        {/*                            setSelect(item)*/}
                        {/*                        }}>*/}
                        {/*                <DeleteIcon/>*/}
                        {/*            </IconButton>*/}
                        {/*        </ButtonGroup>*/}
                        {/*    </Box>*/}


                        {/*</Card>*/}
                        {/*<MenuCard/>*/}
                    </Grid>))}
            </Grid>
        </Container>)
}

export default CustomerMenu;