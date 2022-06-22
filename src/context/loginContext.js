// Login Context
import React, { createContext, useContext, useReducer } from 'react';

const LoginContext = createContext();
const LoginUpdateContext = createContext();

// State
const initialState = {
    user: null,
};

// Reducer
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return { ...state, ...action.payload };
        case 'LOGOUT': 
            return {};
        default:
            return;
    }
}

// Use context
export const useLoginContext = (cb) => {
    return cb(useContext(LoginContext));
}

export const useLoginUpdateContext = () => {
    return useContext(LoginUpdateContext);
}

// Provider
export const LoginContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(loginReducer, initialState);

    return (
        <LoginContext.Provider value={state}>
            <LoginUpdateContext.Provider value={dispatch}>
                {children}
            </LoginUpdateContext.Provider>
        </LoginContext.Provider>
    )
}
