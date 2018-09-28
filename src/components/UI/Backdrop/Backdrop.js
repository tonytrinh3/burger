import React from 'react';

import classes from './Backdrop.css'
//if prop.show even exists then do this
const backdrop = (props) => (
    props.show ? <div className = {classes.Backdrop} onClick = {props.clicked}></div> : null

);

export default backdrop;