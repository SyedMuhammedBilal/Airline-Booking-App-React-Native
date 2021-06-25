import React, { useReducer, createContext } from 'react'
import { AsyncStorage } from 'react-native';
import jwtDecode from 'jwt-decode' 
import { SecureStore } from 'expo'

const initialState = {
    user: null,
    // token: null
}

export const AuthContext = createContext({
    user: null,
    login: (userData) => {

    },
    logout: () => {

    }
})

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT': 
            return {
                ...state,
                user: null
            }
    
        default:
            return state;
    }
}

export function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState);


    async function login(userData) {
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
        AsyncStorage.setItem("jwtToken", userData.token).then(
            () => AsyncStorage.getItem("jwtToken")
                  .then((result)=>console.log(result))
         )
    }

    async function logout() {
        try {
            await AsyncStorage.removeItem('jwtToken')
        } catch(err) {
            console.warn(err)
        } finally {
            dispatch({
                type: 'LOGOUT'
            })
        }
    }

    return (
        <AuthContext.Provider 
            value={{user: state.user, login, logout}} 
            {...props} 
        />
    )
}