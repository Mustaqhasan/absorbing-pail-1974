import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'

const PrivateRoute = ({children}) => {
    const {state}=useContext(AuthContext)
    const {isAuth}=state

    if(!isAuth){
        return <NavLink to={"/login"}/>
    }
  return (children
  )
}

export default PrivateRoute
