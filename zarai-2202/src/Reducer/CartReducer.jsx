import React from 'react'

const CartReducer = (state,action) => {
    
    if(action.type==="ADD_TO_CART"){
        let {productData}=action.payload;
        let cartProduct;
        cartProduct={
            id:productData.id,
            category:productData.category,
            img:productData.img,
            section:productData.section,
            price:productData.price,
            title:productData.title,
            myprice:productData.myprice
        }

        return {
            ...state,
            cart:[...state.cart, cartProduct]
        }
    }
  return state;
}

export default CartReducer
