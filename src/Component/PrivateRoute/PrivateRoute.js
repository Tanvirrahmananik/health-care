import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Usefirebase from '../../hooks/usefirebase';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = Usefirebase();
    if(isLoading){
        return <Spinner animation="border" variant="secondary" />
    }
    return (
        <Route
        {...rest}
        render = {({location}) => user.email? children: <Redirect
        to ={{
            pathname: '/Login',
            state: { from: location }
        }}
        >
           
        </Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;