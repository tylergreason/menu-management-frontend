import React from 'react';
import {MenuItem} from '../../shared/MenuItem';
import './Menu.css';

function Menu() {
    return (
        <div id="menu">
            <h2>Restaurant Menu</h2>
        <div>

        <div className="menu-items">
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </div>
        </div>
        </div>
    );
};

export default Menu;