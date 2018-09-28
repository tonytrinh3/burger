import React from 'react';

import classes from "./Modal.css"
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

//we can pass anything in the children - wrapping div
//this is for the backdrop
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked = {props.modalClosed}/>
        <div 
            className = {classes.Modal}
            style ={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>

);

export default modal;