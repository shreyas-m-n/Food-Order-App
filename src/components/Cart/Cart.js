import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

export const Cart = (props) => {
    const dummyData = <ul className={classes['cart-items']}> {/* typecast it like this if u add '-' in classname */}
        {[{id: 'c1', name: 'Sushi', amount: '35.98', price: '300'}].map(
            ele=> <li>{ele.name}</li>
        )}
    </ul>
  return (
    <Modal hideTheCart= {props.onClose}>
        {dummyData}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes['button']}>Order</button>
        </div>
    </Modal>
  )
}
