import React, { createContext, useEffect, useReducer, useState } from 'react'
import reducer from "../Reducer/CartReducer";

const getLocalData=()=>{
    let newData=JSON.parse(localStorage.getItem("localData")) || []

    return newData;
}
const initState={
    cart:getLocalData(),
    total_item:"",
    total_price:""
}
export const CartContext=createContext()
const CartContextProvider = ({children}) => {
    const [state, dispatch]=useReducer(reducer, initState)
    

    const setIncrease=(id)=>{
      dispatch({type:"SET_INCREMENT", payload:id})
    }
    const setDecrease=(id)=>{
      dispatch({type:"SET_DECREMENT", payload:id})
    }
    // const findTotal=(id,qua,myprice,productData)=>{
    //     dispatch({type:"ADD_TOTAL", payload:{id,qua,myprice,productData}})
    // }

    const removeItem=(id)=>{
      dispatch({type:"REMOVE_ITEM",payload:id})
    }


    const addToCart=(id,myprice,amount,productData)=>{
        dispatch({type:"ADD_TO_CART", payload:{id,myprice,amount,productData}})
    }

    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"})
        dispatch({type:"CART_TOTAL_PRICE"})
        localStorage.setItem("localData", JSON.stringify(state.cart))
    },[state.cart])
  return (
    <div>
      <CartContext.Provider value={{...state, addToCart,setDecrease,setIncrease,removeItem}}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export default CartContextProvider
