import React, { useContext } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'

const PrivateRoute = ({children}) => {
    const {state}=useContext(AuthContext)
    const {isAuth}=state

    if(isAuth==false){
        return <Navigate to={"/login"}/>
    }
  return (children
  )
}

export default PrivateRoute
