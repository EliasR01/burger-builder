import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxx';
import classes from './SideMenu.css';

const sideMenu = (props) => (
    <Aux>
        {props.show ? 
            <div className={classes.SideMenu}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.Navigation}>
                    <NavigationItems />
                </nav>
            </div> : 
        <div className={classes.Init} onClick={props.handleMenuBar}>Menu</div>}
    </Aux>
);

export default sideMenu;