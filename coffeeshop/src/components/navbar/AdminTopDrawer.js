import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import {AppBar, Button} from "@mui/material";
import PropTypes from 'prop-types';
import {Toolbar} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";

import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GroupIcon from '@mui/icons-material/Group';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {hover} from "@testing-library/user-event/dist/hover";
import {makeStyles} from "@mui/material";


const AdminTopDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                zIndex: 100,
            }}
        >
            <Button
                color="primary"
                variant="contained"
                onClick={toggleDrawer}
                sx={{
                    borderRadius:35,
                    padding: 4.5,
                    margin: 2,
                    width: 60,
                    height: 60
                }}
            >
                <MenuIcon sx={{fontSize: 35, color: 'white'}}/>
            </Button>
            <Drawer
                sx={{
                    height: '100%',
                    top: 0,
                    left: 0,
                    position: 'fixed',
                }}
                anchor="top"
                open={isOpen}
                onClose={toggleDrawer}
            >
                <Box>
                    <Toolbar
                        sx={{
                            height: 170,
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#606c38',
                            }}
                        >
                            <h3>Admin Dashboard.</h3>
                        </Typography>
                        <LocalCafeIcon
                            sx={{
                                fontSize: 65,
                                paddingRight: 5,
                                marginRight: "auto",
                                color: '#606C38'
                            }}
                        />

                        <Link
                            to="/admin/menu"
                            style={{textDecoration: "none"}}
                        >
                            <Button
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <RestaurantMenuIcon
                                    sx={{
                                        fontSize: 50,
                                        color: '#606C38'
                                    }}
                                />
                                <Typography
                                    sx={{
                                        px: 5,
                                    }}
                                >
                                    <h2>Menu</h2>
                                </Typography>
                            </Button>
                        </Link>
                        <Divider/>
                        <Link
                            to="/admin/ingredient"
                            style={{textDecoration: "none"}}
                        >
                            <Button
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <ShoppingBasketIcon
                                    sx={{
                                        fontSize: 50,
                                        color: '#606C38'
                                    }}
                                />
                                <Typography
                                    sx={{
                                        px: 5,
                                    }}
                                >
                                    <h2>Ingredient</h2>
                                </Typography>
                            </Button>
                        </Link>
                        <Divider/>
                        {/*<Link*/}
                        {/*    to="/admin/customer-list"*/}
                        {/*    style={{textDecoration: "none"}}*/}
                        {/*>*/}
                        {/*    <Button*/}
                        {/*        sx={{*/}
                        {/*            display: 'flex',*/}
                        {/*            flexDirection: 'column'*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        <GroupIcon*/}
                        {/*            sx={{*/}
                        {/*                fontSize: 50,*/}
                        {/*                color: '#606C38',*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*        <Typography*/}
                        {/*            sx={{*/}
                        {/*                px: 5,*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            <h2>Customers</h2>*/}
                        {/*        </Typography>*/}
                        {/*    </Button>*/}
                        {/*</Link>*/}
                        <Link
                            to="/"
                            style={{textDecoration: "none"}}
                        >
                            <Button
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <ExitToAppIcon
                                    sx={{
                                        fontSize: 50,
                                        color: '#606C38',

                                    }}
                                />
                                <Typography
                                    sx={{
                                        px: 5,
                                    }}
                                >
                                    <h2>Logout</h2>
                                </Typography>
                            </Button>
                        </Link>
                    </Toolbar>
                </Box>
            </Drawer>
        </Box>
    );
};

export default AdminTopDrawer;
