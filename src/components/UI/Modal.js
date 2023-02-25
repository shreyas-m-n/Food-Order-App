import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const BackDrop = props => {
    return <div className={classes.backdrop} onClick={props.hideCart}>
    </div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = props => {
    const destination = document.getElementById('overlay');
    return(
    <Fragment>
        {ReactDOM.createPortal(<BackDrop hideCart= {props.hideTheCart}></BackDrop>, destination)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, destination)}
    </Fragment>
    );
}

export default Modal;