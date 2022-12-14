import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const [state, setState]=useState({
        isAuth:false,
        name:null
    })
    const toggleAuth=(auth, name)=>{
        setState({
            ...state,
            isAuth:auth,
            name:name
        })
    }
  return (
    <div>
      <AuthContext.Provider value={{toggleAuth,state}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
