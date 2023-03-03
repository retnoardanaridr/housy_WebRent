import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const defaultState = {
    isLogin: false,
    user: {},
    order: {},
}

const reducer = (user, action) => {
    const {type, payload} = action

    switch (type) {
        case 'USER_SUCCESS':
        case 'LOGIN_SUCCESS':
            localStorage.setItem("token", payload.token)
            console.log(payload)
            return {
                isLogin:true,
                user:payload
            };
        case 'ADD_TRANSACTION_SUCCESS':
            return {
                order: {}
            };
        case 'AUTH_ERROR':
        case 'LOGOUT':
            localStorage.removeItem("token");
            return {
                isLogin: false,
                user: {}
            }
        default: throw new Error()
    }
}

export const UserContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, defaultState)
    return (
        <UserContext.Provider value={ [state, dispatch] }>
            { children }
        </UserContext.Provider>
    )
}