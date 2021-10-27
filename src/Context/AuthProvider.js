import React, {createContext } from 'react';
import Usefirebase from '../hooks/usefirebase';
export const AuthContext = createContext();
const AuthProvider = (props) => {
    const {children} = props;
    const allContexts = Usefirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
            </AuthContext.Provider>
    );
}
export default AuthProvider;