import React from 'react';
import BellIcon from 'react-bell-icon';
import './NavItems.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import NavItem from './NavItem/NavItem';

const options = [
    'Account', 'Setup Wizard', 'Setup Web Tracking', 'Klavio Status', 'logout'
];
const NavItems = () => (

    <ul className="NavItems">
        <a href="/"><BellIcon width='40' active={false} /></a>
        <NavItem link="/" >Upgrade</NavItem>
        <NavItem link="/">Support</NavItem>
        <NavItem link="/" >Blog</NavItem>
        <Dropdown className="dropdown" options={options} onChange={this._onSelect} value="Student"/>
    </ul>
);

export default NavItems;