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


const AdminTopDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box
            sx={{
                position: 'fixed',
            }}
        >
            <IconButton
                onClick={toggleDrawer}
                sx={{
                    backgroundColor: '#606C38',
                    padding: 3,
                    margin: 2,
                    width: 60,
                    height: 60
                }}
            ><MenuIcon sx={{fontSize: 'inherit', color: 'white'}}/></IconButton>
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
                            height: 150,
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#606c38'
                            }}
                        >
                            <h3>ADMIN DASHBOARD</h3>
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
                            <Button>
                                <Typography
                                    sx={{
                                        px: 5,
                                        py: 2
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
                            <Button>
                                <Typography
                                    sx={{
                                        px: 5,
                                        py: 3
                                    }}
                                >
                                    <h2>Ingredient</h2>
                                </Typography>
                            </Button>
                        </Link>
                        <Divider/>
                        <Link
                            to="/admin/customer-list"
                            style={{textDecoration: "none"}}
                        >
                            <Button>
                                <Typography
                                    sx={{
                                        px: 5,
                                        py: 3
                                    }}
                                >
                                    <h2>Customers</h2>
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
