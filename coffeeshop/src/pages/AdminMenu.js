import React, {useState, useEffect} from 'react'
import {getAdminMenuItems} from "../data/adminMenuItems";
import {
    Container,
    Card,
    Dialog,
    DialogContent,
    DialogTitle,
    Button,
    Box,
    Typography,
    Divider,
    List,
    CardHeader,
    Grid
} from '@mui/material'
import {MenuListToolbar} from "../components/menu/MenuListToolbar";
import AddMenu from '../components/menu/AddMenu';
import AdminTopDrawer from "../components/navbar/AdminTopDrawer";
import AdminMenuList from "../components/menu/AdminMenuList";

function AdminMenu() {
    const [adminMenu, setAdminMenu] = useState([])
    const [adminMenuSearchResults, setAdminMenuSearchResults] = useState()

    useEffect(() => {
        getAdminMenuItems().then(json => {
            setAdminMenu(json)
            return json
        }).then(json => {
            setAdminMenuSearchResults(json)
        })
    }, [])

    const [openAdd, setOpenAdd] = useState(false);

    return (
        <>
            <AdminTopDrawer/>
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
                            sx={{m: 1}}
                            variant="h4"
                        >
                            Menu
                        </Typography>
                        <Box sx={{m: 1}}>
                            <Button
                                onClick={() => {
                                    setOpenAdd(true)
                                }}
                                color="primary"
                                variant="contained"
                            >
                                Add new Menu
                            </Button>
                            <Dialog
                                fullWidth="lg"
                                open={openAdd}
                                onClose={() => {
                                    setOpenAdd(false)
                                }}
                            >
                                <DialogTitle>
                                    Add a new menu
                                </DialogTitle>
                                <Divider/>
                                <DialogContent>
                                    <AddMenu/>
                                </DialogContent>
                            </Dialog>
                        </Box>
                    </Box>
                    <MenuListToolbar menu={adminMenu} setAdminMenuSearchResults={setAdminMenuSearchResults}/>
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
                                        subheader={`${adminMenu.length} menu items in total.`}
                                        title="Menu List"
                                    />
                                    <Divider/>
                                    <AdminMenuList adminSearchResults={adminMenuSearchResults}/>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default AdminMenu