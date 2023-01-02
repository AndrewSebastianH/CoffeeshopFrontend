import { useLocation, Navigate, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"
import { AbilityContext } from "./Context"

const Auth = ({ allowedRoles }) => {
    const role = sessionStorage.role

    const canAccess = allowedRoles.includes(role);

    if(canAccess)
        return (
            <Outlet/>
        );
    
    return (<Navigate to="/"/>)
 
};

export default Auth;