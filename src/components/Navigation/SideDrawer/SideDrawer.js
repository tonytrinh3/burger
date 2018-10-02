import React from 'react';

import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './SideDrawer.css';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary';


//want to reuse such a toggle button
//component - normal function component - get some props - return props - but not a jsx code return 
//but an actual real function body that we'll use 
const sideDrawer = (props) => {
    //... want to conditionally attach some css class so that is why you use this {} instead of () 
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show = {props.open} clicked = {props.closed}/>
            <div className = {attachedClasses.join(' ')}>
                <div className = {classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );

};

export default sideDrawer; 