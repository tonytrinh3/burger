import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
// functional component bc you don't need to manage any state'
// => () means exporting some jsx
const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <div>MENU</div>
            <div className = {classes.Logo}>
                <Logo />
            </div>
        <nav className = {classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
); 

export default toolbar;