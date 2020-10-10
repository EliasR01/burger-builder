import React from 'react';
import Aux from '../../hoc/Auxx';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideMenu from '../Navigation/SideMenu/SideMenu';

const layout = ( props ) => (
    <Aux>
        <Toolbar />
        <SideMenu show={props.showMenuBar} handleMenuBar={props.showMenu}/>
        <main className={Classes.Content} onClick={props.hideMenu}>
            {props.children}
        </main>
    </Aux> 
);

export default layout;