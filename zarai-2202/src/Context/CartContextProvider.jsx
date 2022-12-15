import React, { createContext, useEffect, useReducer, useState } from 'react'
import reducer from "../Reducer/CartReducer";

const getLocalData=()=>{
    let newData=JSON.parse(localStorage.getItem("localData")) || []

    return newData;
}
const initState={
    cart:getLocalData()
}
export const CartContext=createContext()
const CartContextProvider = ({children}) => {
    const [state, dispatch]=useReducer(reducer, initState)
    // const [total, setTotal]=useState(null)

    // const handleTotal=(val)=>{
    //     setTotal(val)
    // }

    const addToCart=(productData)=>{
        dispatch({type:"ADD_TO_CART", payload:{productData}})
    }

    useEffect(()=>{
        localStorage.setItem("localData", JSON.stringify(state.cart))
    },[state.cart])
  return (
    <div>
      <CartContext.Provider value={{...state, addToCart}}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export default CartContextProvider
