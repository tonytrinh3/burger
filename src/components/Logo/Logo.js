import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png'

import classes from './Logo.css'

//functional component bc no need to manage state
const logo = (props) =>(
    <div className = {classes.Toolbar}>
        <img src ={burgerLogo} alt='MyBurger' />
    </div>

);

export default logo;