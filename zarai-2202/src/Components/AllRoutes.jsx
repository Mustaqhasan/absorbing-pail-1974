import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adress from '../Pages/Adress'
import Cart from '../Pages/Cart'
import Help from '../Pages/Help'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Payment from '../Pages/Payment'
import Search from '../Pages/Search'
import Summary from '../Pages/Summary'
import NewPersonalDetails from './NewPersonalDetails'
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
        {/* <Route path='/newaddress' element={<NewPersonalDetails/>}/> */}
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/adress' element={
          <PrivateRoute>
          <Adress/>
          </PrivateRoute>

          }/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
