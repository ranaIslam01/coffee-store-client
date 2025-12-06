import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user} = use(AuthContext);
    const location = useLocation();
    // console.log(location);
    if(user) {
        return children;
    }
    if(!user) {
        return <Navigate state={location.pathname} to='/signin'></Navigate>;
    }
};

export default PrivetRoute;