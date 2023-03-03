import { React, useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../store/cart-context'
import { CartItem } from './CartItem'

export const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartItemRemoveHandler= (id)=> {
        
    }
    const cartItemAddHandler= (item)=> {

    }

    const cartData = <ul className={classes['cart-items']}> {/* typecast it like this if u add '-' in classname */}
        {cartCtx.items.map(
            ele=> <CartItem key= {ele.id}
            name= {ele.name}
            amount= {ele.amount}
            price= {ele.price}
            onRemove= {cartItemRemoveHandler.bind(null, ele.id)}
            onAdd= {cartItemAddHandler(null, ele)}
            >
            </CartItem>
        )}
    </ul>

    const hasItems= cartCtx.items.length > 0;
    const totalAmount= `$${cartCtx.totalAmount.toFixed(2)}`;


  return (
    <Modal hideTheCart= {props.onClose}>
        {cartData}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{ totalAmount }</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes['button']}>Order</button>}
        </div>
    </Modal>
  )
}
