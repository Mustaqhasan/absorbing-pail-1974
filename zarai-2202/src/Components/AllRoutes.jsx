import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Help from '../Pages/Help'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Search from '../Pages/Search'
import PersonalDetails from './PersonalDetails'
import PrivateRoute from './PrivateRoute'
import ProductDetails from './ProductDetails'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <Home/>
          }/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/cart/:id' element={<Cart/>}/> */}
        <Route path='/signup' element={<PersonalDetails/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
