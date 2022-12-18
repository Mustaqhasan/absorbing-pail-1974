import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const [state, setState]=useState({
        isAuth:false,
        name:null,
        adress:null,
        locality:null,
        phone:null
    })
    const toggleAuth=(auth, name,adress,locality,phone)=>{
        setState({
            ...state,
            isAuth:auth,
            name:name,
            adress:adress,
            locality:locality,
            phone:phone
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
