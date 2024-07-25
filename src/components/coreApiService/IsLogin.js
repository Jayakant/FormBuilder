import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './Auth';
import { useLocation } from 'react-router-dom';

export default function IsLogin({ children }) {

    const auth = useAuth()

    const location = useLocation()

    console.log(location)

    React.useEffect(() => {

        console.log(JSON.stringify(auth.userSession))

    }, [auth.userSession])

    // alert(auth.userSession.username)

    if (auth.userSession === null) {
        // return <Navigate to="/" state={{ path: location.pathname }} />
        return <Navigate to="/unauthorized_access" state={{from: location}}/>
    }
    return <Outlet/>
}