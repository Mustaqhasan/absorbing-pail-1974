import React from 'react'
import Navbar from '../Components/Navbar'
import Register from '../Components/Register'
import SignIn from '../Components/Signin'

const Login = () => {
  return (
    <>
    <Navbar/>
    <div style={{display:"flex", width:"80%", marginTop:"0"}}>
      <div style={{marginLeft:"70px"}} >

      <SignIn/>
      </div>
      <div style={{marginLeft:"70px"}}>
        <Register/>
      </div>
    </div>
    </>
  )
}

export default Login
