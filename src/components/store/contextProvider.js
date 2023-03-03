import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState= {
  items: [],
  totalAmount: 0
}

const cartReducer= (state, action)=>{
  if(action.type === 'ADD_ITEM'){

    const existingItemIndex= state.items.findIndex(item=> item.id === action.item.id);
    const existingCartItem= state.items[existingItemIndex];
    let updatedItems;
    let updatedCartItem;

    if(existingCartItem){
      updatedCartItem= {...existingCartItem,
      amount: existingCartItem.amount + action.item.amount};

      updatedItems= [...state.items];
      updatedItems[existingItemIndex] = updatedCartItem;
    }
    else{
      updatedItems= state.items.concat(action.item);
    }

    const updatedAmount= parseInt(state.totalAmount) + parseInt(action.item.amount) * parseInt(action.item.price);
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
        items: cartState.items, 
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
  return (
    <CartContext.Provider value= {cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}
