import React, { createContext, useContext, useState } from 'react'


// Context
export const loginContext = createContext({
    user: null,
    login: () => {},
    logout: () => {}
});

const USER = { username: "Guest", isGuestUser: true };

// Provider
export const LoginContextProvider = ({children}) => {

    const [user, setUser] = useState(USER); 

    const logIn = (loginDetails) => {
        setUser({ isGuestUser: false, username: loginDetails?.username });
    }
    const logOut = () => {
        setUser({ isGuestUser: true, username: '' });
    }
    
    return <loginContext.Provider value={{user, logIn, logOut}}>
        {children}
    </loginContext.Provider>
}

// Use context
export const useLoginContext = () => {

    const { user, logIn, logOut } = useContext(loginContext);

    return { user, logIn, logOut };
}