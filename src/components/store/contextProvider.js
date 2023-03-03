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

    const updatedAmount= state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  else if(action.type == 'REMOVE_ITEM'){
    const existingItemIndex= state.items.findIndex(item=> item.id === action.id)
    const existingCartItem= state.items[existingItemIndex];
    let updatedItems;
    let updatedCartItem;
    if(existingCartItem.amount == 1){
      updatedItems= state.items.filter(item=> item.id != action.id)
    }
    else{
      updatedCartItem= {...existingCartItem, amount: existingCartItem.amount - 1};
      updatedItems= [...state.items];
      updatedItems[existingItemIndex]= updatedCartItem;
    }
    const updatedAmount= state.totalAmount - existingCartItem.price;
    return{
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
