import React, {useEffect, useState} from 'react';
import {MenuItem} from '../../shared/menuItem/MenuItem';
import styled from 'styled-components';
import createMenuData from '../../shared/menuData';

    const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    padding: 1rem;
    background-color: beige;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 70rem;
    `;

    const MenuItems = styled.div`
    display: flex;
    flex-flow: row wrap;
    
    .menu-item {
        padding: 1rem;
    }
    `;

function Menu() {

    const [menuItemData, setMenuItemData] = useState([]);

    useEffect(() => {
        if (!menuItemData.length) {
        async function check(){
                const result = await createMenuData();
                setMenuItemData(result);
            }
            check();
        }
    })

    return (
        <Wrapper>
            <h2>Restaurant Menu</h2>

        <MenuItems>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </MenuItems>
        </Wrapper>
    );
};

export default Menu;