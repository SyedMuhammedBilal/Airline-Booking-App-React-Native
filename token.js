import React, { useContext } from 'react'
import { AuthContext, AuthProvider, initialState } from './store/context';

const Token = () => {
  const { user, token } = useContext(AuthContext)
  return (
    console.log(token)
  )
}


export default Token
