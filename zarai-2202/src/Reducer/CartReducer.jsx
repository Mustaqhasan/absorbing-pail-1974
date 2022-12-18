

const CartReducer = (state,action) => {
    
    if(action.type==="ADD_TO_CART"){
        let {id,myprice,amount,productData}=action.payload;


        let existingData=state.cart.find((currItem)=>currItem.id===id+myprice)
        console.log(existingData)

        if(existingData){
            let updatedProduct=state.cart.map((curElem)=>{
                if(curElem.id===id+myprice){
                    let newAmount=curElem.amount+amount;

                    if(newAmount >= amount){
                        newAmount=amount
                    }
                    return{
                        ...curElem,
                        // myprice:newPrice,
                        amount:newAmount
                    }
                }else{
                    return curElem;
                }
            })

            return {
                ...state,
                cart:updatedProduct
            } 

        }else{

            let cartProduct;
            cartProduct={
                id:id+myprice,
                category:productData.category,
                img:productData.img,
                section:productData.section,
                myprice,
                title:productData.title,
                price:productData.price,
                amount
            }
    
            return {
                ...state,
                cart:[...state.cart, cartProduct]
            }
        }
    }
    // if(action.type==="ADD_TOTAL"){
    //     let {id,qua,myprice,productData}=action.payload;

    // }
    if(action.type==="SET_DECREMENT"){
        let updatedData=state.cart.map((item)=>{
            if(item.id===action.payload){
                let decAmount=item.amount-1
                if(decAmount <= 1){
                    decAmount=1 
                }
                return {
                    ...item,
                    amount:decAmount
                }
            }else{
                return item;
            }
        })
        return {...state,cart:updatedData}
    }
    if(action.type==="SET_INCREMENT"){
        let updatedData=state.cart.map((item)=>{
            if(item.id===action.payload){
                let incAmount=item.amount+1
                if(incAmount >8){
                    incAmount=8
                }
                return {
                    ...item,
                    amount:incAmount
                }
            }else{
                return item;
            }
        })
        return {...state,cart:updatedData}
    }

    if(action.type==="CART_TOTAL_ITEM"){
        let updatedTotal=state.cart.reduce((ininVal, item)=>{
            let {amount}=item;
            ininVal=ininVal+amount

            return ininVal
        },0)

        return{
            ...state,
            total_item:updatedTotal
        }
    }

    if(action.type==="CART_TOTAL_PRICE"){
        let totalPrice=state.cart.reduce((initVal, item)=>{
            let {myprice, amount}=item;

            initVal=initVal+myprice*amount;
            return initVal
        },0)

        return{
            ...state,
            total_price:totalPrice
        }
    }

    if(action.type==="REMOVE_ITEM"){
        let updatedCart=state.cart.filter((item)=>item.id!==action.payload)
        return {
            ...state,
            cart:updatedCart
        }
    }
  return state;
}

export default CartReducer
