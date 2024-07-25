import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import { useAuth } from '../Auth';
import { useLocation } from 'react-router-dom';

export default function IsAdmin({ children }) {

    const auth = useAuth()

    const location = useLocation()

    console.log(location)

    React.useEffect(() => {

        console.log(JSON.stringify(auth.userSession))

    }, [auth.userSession])

    // alert(auth.userSession.username)

    if (auth.userSession?.username === auth.admin) {
        return <Outlet/>
    }

    else {
        return <Navigate to="/unauthorized_access" />
    }
}