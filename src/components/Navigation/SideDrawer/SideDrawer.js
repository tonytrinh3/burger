import React from 'react';

import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './SideDrawer.css';



//want to reuse such a toggle button
//component - normal function component - get some props - return props - but not a jsx code return 
//but an actual real function body that we'll use 
const sideDrawer = (props) => {
    //... want to conditionally attach some css class so that is why you use this {} instead of () 
    
    return (
        <div className = {classes.SideDrawer}>
            <div className = {classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>

    );

};

export default sideDrawer; 