import React, {useEffect, useState} from 'react';
import {MenuItem} from '../../shared/menuItem/MenuItem';
import styled from 'styled-components';
import createMenuData from '../../shared/menuData';
import { DeleteConfirmation } from '../../shared/deleteConfirmation/DeleteConfirmation';
import AddMenuItem from '../../shared/addMenuItem/AddMenuItem';

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



function Menu() {
    function renderMenuItems(menuItemData) {
        return menuItemData.map(item => {
                return <MenuItem
                key={item.key}
                menuItem = {
                    {
                        name: item.name,
                        price: item.price,
                        imgUrl: item.imgUrl,
                        description: item.description,
                        tags: item.tags,
                        imgAlt: item.imgAlt,
                        id: item.key
                    }
                }
                clickDelete={(menuItem) => promptDeleteMenuItem(menuItem)}
                ></MenuItem>
            })
    }

    function promptDeleteMenuItem(menuItem) {
        setConfirmDelete(true);
        setItemToDelete(menuItem);
    }

    function deleteMenuItem(menuItem) { 
        const filteredMenuItems = menuItemData.filter(item => item.key !== menuItem.id);
        setMenuItemData(filteredMenuItems);
        setConfirmDelete(false);
    }

    function addMenuItem(menuItem) {
        const sortedMenuData = [...menuItemData];
        sortedMenuData.sort((a,b) =>  a.key <= b.key ? 1 : -1);
        const menuItemCopy = {...menuItem};
        if (sortedMenuData.length) {
            menuItemCopy.key = sortedMenuData[0].key + 1;
        } else {
            menuItemCopy.key = 0;
        }
        setMenuItemData([menuItemCopy, ...menuItemData]);
    }

    const [menuItemData, setMenuItemData] = useState([]);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [itemToDelete, setItemToDelete] = useState({});

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
        <Wrapper id="menu">
            <h2>Restaurant Menu</h2>
        <AddMenuItem handleSubmit={addMenuItem}></AddMenuItem>
            <MenuItems>
                {renderMenuItems(menuItemData)}
            </MenuItems>
        </Wrapper>
        <DeleteConfirmation 
            hidden={!confirmDelete}
            itemToDelete={itemToDelete}
            clickNo={() => setConfirmDelete(false)}
            clickYes={() => deleteMenuItem(itemToDelete)}
        ></DeleteConfirmation>
        </>
    );
};

export default Menu;