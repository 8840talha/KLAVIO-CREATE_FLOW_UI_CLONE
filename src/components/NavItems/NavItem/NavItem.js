import React from 'react';
import './NavItem.css';

const NavItem = ( props ) => (
    <li className="NavItem li">
        <a href={props.link} >{props.children}</a>
       
    </li>
    
);

export default NavItem;