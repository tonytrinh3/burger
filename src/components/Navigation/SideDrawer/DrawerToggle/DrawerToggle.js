import React from 'react';

import classes from './DrawerToggle.css'
/*this is how you make those _ _ _ thing to show menu*/
const drawerToggle = (props) => (
    <div className = {classes.DrawerToggle} onClick = {props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;