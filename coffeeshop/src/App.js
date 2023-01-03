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

import Auth from './utility/Auth';

// pages
import AdminMenu from './pages/AdminMenu';
import CustomersList from "./pages/CustomersList"
import CustomerMenu from "./pages/CustomerMenu";
import Ingredients from "./pages/Ingredients";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                {/* Customer Page Routes */}

                <Route path="/" element={ <Login/> }/>
                <Route path="/signup" element={ <Signup/> }/>
                <Route element={<Auth allowedRoles={["ROLE_CUSTOMER"]}/> }>
                    <Route path="/menu" element={ <CustomerMenu/> } />
                </Route>

                {/* Admin Page Routes */}
                <Route path="/admin/login" element={ <AdminLogin/> } />
                <Route element={<Auth allowedRoles={["ROLE_ADMIN"]}/>}>
                    <Route path="/admin/ingredient" element={ <Ingredients/> }/>
                </Route>
                <Route element={<Auth allowedRoles={["ROLE_ADMIN"]}/>}>
                    <Route path="/admin/menu" element={ <AdminMenu/> }/>
                </Route>
                {/*<Route path="/admin/customer-list" element={ <CustomersList/> }/>*/}
            </Routes>
        </ThemeProvider>
    );
}

export default App;
