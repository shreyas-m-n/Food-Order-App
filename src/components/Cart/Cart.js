import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

export const Cart = () => {
    const dummyData = <ul className={classes['cart-items']}> {/* typecast it like this if u add - in classname */}
        {[{id: 'c1', name: 'Sushi', amount: '35', price: '300'}].map(
            ele=> <li>{ele.name}</li>
        )}
    </ul>
  return (
    <Modal>
        {dummyData}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes['button']}>Order</button>
        </div>
    </Modal>
  )
}
