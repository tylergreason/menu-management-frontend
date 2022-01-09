import React from 'react';
import {MenuItem} from '../../shared/menuItem/MenuItem';
import styled from 'styled-components';

    const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    padding: 1rem;
    background-color: beige;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    `;

    const MenuItems = styled.div`
    display: flex;
    flex-flow: row wrap;
    
    .menu-item {
        padding: 1rem;
    }
    `;

    const Header = styled.h2`
        color: ${'blue'};
    `;

function Menu() {

    return (
        <Wrapper>
            <Header>Restaurant Menu</Header>

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