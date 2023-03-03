import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../store/cart-context'
import classes from './CartButton.module.css'


export const CartButton = (props) => {
  const [buttonShouldBump, setButtonShouldBump] = useState(false);
  const cartCtx= useContext(CartContext);
  const { items } = cartCtx;
  const numberOfItems= items.reduce((currNumber, item)=>{
    return currNumber += item.amount;
  }, 0)

  const btnClass= `${classes.button} ${buttonShouldBump ? classes.bump : ''}`
  useEffect(()=> {
    if(items.length === 0){
      return;
    }
    setButtonShouldBump(true);
    const resetBumpTimer= setTimeout(()=>{
      setButtonShouldBump(false);
    }, 300)
    return()=>{ //return function is automatically run by react
      clearTimeout(resetBumpTimer);
    }
  }, [items]);
  return (
    <button className= {btnClass} onClick= {props.onClick}>
        <span className= {classes.icon}><CartIcon></CartIcon></span>
        <span>Cart</span>
        <span className= {classes.badge}>{numberOfItems}</span>
    </button>
  )
}
