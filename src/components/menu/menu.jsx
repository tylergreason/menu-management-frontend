import React, {useEffect, useState} from 'react';
import {MenuItem} from '../../shared/menuItem/MenuItem';
import styled from 'styled-components';
import createMenuData from '../../shared/menuData';
import { DeleteConfirmation } from '../../shared/deleteConfirmation/DeleteConfirmation';

    const Wrapper = styled.section`
    width: 100%;
    height: 100%;
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
        margin: 1rem;

    }
    `;


function renderMenuItems(menuItemData) {
    return menuItemData.map(item => {
            return <MenuItem
            key={item.key}
            name={item.name}
            price={item.price}
            imgUrl={item.imgUrl}
            description={item.description}
            tags={item.tags}
            imgAlt={item.imgAlt}

            ></MenuItem>
        })
}

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
        <>
        <Wrapper>
            <h2>Restaurant Menu</h2>
        <MenuItems>
         {renderMenuItems(menuItemData)}
        </MenuItems>
        </Wrapper>
        <DeleteConfirmation></DeleteConfirmation>
        </>
    );
};

export default Menu;