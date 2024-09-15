/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const userId = localStorage.getItem("userId");

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem( "user", JSON.stringify( userData ) );
        localStorage.setItem('userId', user._id);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem( "user" );
        localStorage.removeItem('userId');
    };

    return (
        <UserContext.Provider value={{ user, userId, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
