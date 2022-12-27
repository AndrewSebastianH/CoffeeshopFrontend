import '@fontsource/inter';
import {Stack, Box, Container, Card, Typography} from '@mui/material';
import React from "react";
import {ThemeProvider} from '@mui/material/styles';
import {theme} from './components/theme/index';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

import AdminMenu from './pages/AdminMenu';
import CustomersList from "./pages/CustomersList"
import CustomerMenu from "./pages/CustomerMenu";
import Ingredients from "./pages/Ingredients";
import AdminTopDrawer from "./components/navbar/AdminTopDrawer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={ <Login/> }/>
                <Route path="/signup" element={ <Signup/> }/>
                <Route path="/cart"/>

                <Route path="/admin/login" />
                <Route path="/admin/ingredient" element={ <Ingredients/> }/>
                <Route path="/admin/customer-list" element={ <CustomersList/> }/>
                <Route path="/admin/menu" element={ <AdminMenu/> }/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
