import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'
// functional component bc you don't need to manage any state'
// => () means exporting some jsx
const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
); 

export default toolbar;