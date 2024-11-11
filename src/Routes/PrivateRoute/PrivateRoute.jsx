import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Common/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) return <Loading></Loading>
    if (user) return children;

    return <Navigate to="/logIn" state={location?.pathname} replace={true}></Navigate>

};

export default PrivateRoute;