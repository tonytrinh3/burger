import React from 'react';

import classes from "./Modal.css"

//we can pass anything in the children - wrapping div
const modal = (props) => (
    <div className = {classes.Modal}>
        {props.children}
        </div>

);

export default modal;