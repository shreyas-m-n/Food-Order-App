import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState= {
  items: [],
  amount: 0
}

const cartReducer= (state, action)=>{
  if(action.type === 'ADD_ITEM'){
    const updatedItems= state.items.concat(action.item);
    const updatedAmount= state.amount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  return defaultCartState;
}

export const CartProvider = (props) => {
    const addItemHandler= (item)=>{
      dispatchCartItems({type: 'ADD_ITEM', item: item})
    }
    const removeItemHandler= (id)=>{
      dispatchCartItems({type: 'REMOVE_ITEM', id: id})
    }

    const [cartState, dispatchCartItems]= useReducer(cartReducer, defaultCartState);
    const cartContext= {
        items: [], 
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
  return (
    <CartContext.Provider value= {cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}
