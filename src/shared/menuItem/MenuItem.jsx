import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 20rem;
    height: 22rem;
    border: 1px solid black; 
    margin: 1rem;
    display: flex; 
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem 1rem 1rem;  
    position: relative;
    
    h3 {
        text-transform: capitalize;
    }
    img {
        width: 100%;
        max-height: 50%;
    }

    .display-price:before {
        content: "$";
    }

    .display-description {
        width: 100%;
        margin-bottom: 1rem;
    }

    .delete-wrapper {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-content: center;
        margin-top: 1rem;
        .delete-button{
            background-color: RGBA(0,0,0,0);
            color: black;
            font-size: 1rem;
            border: 1px solid red;
            border-radius: 5%;
        }
    }
`;

const ItemDetails = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const EditMenuItemWrapper = styled.div`
    position: absolute;
    height: 12rem;
    bottom: 0rem;
    background: rgba(100,100,100,0.8);
    width: 20rem;
    padding: 0 0.5rem;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;

    h3, label {
        color: ivory;
    }


    .form-line-wrapper {
        display: flex; 
        justify-content: space-between;
        padding: 0.125rem 0;
    }

    .button-wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 0;
    }
`;

export function MenuItem(props) {

    const [showEditMenu, setShowEditMenu] = useState(false);
    const [editMenuItemData, setEditMenuItemData] = useState({});
    const [menuItemData, setMenuItemData] = useState({});

    useEffect(() => {
        if (!Object.keys(menuItemData).length) setMenuItemData(props.menuItem);
    })

    const menuItem = props.menuItem;

    function renderEditMenu() {
        if (showEditMenu) {
            const inputsToRender = ['name', 'description', 'price', 'imgUrl'];
            return (
                <EditMenuItemWrapper>
                <h3>Edit Menu Item</h3>
                <form className="edit-form">
                    {inputsToRender.map((input, idx) => {
                    return (
                        <div className="form-line-wrapper" key={idx}>
                        <label htmlFor={input}> Item {input}: </label>               
                        <input type="text" name={input} defaultValue={editMenuItemData[input]} className={'edit-' + input}
                        onChange={editInputOnChange}
                        />
                        </div>
                    )
                })}
                </form>
                <div className="button-wrapper">
                    <input type="submit" value="Submit"></input>
                    <button type="button" className="cancel-edit-button" onClick={() => setShowEditMenu(false)}>Cancel</button>
                </div>
                </EditMenuItemWrapper>
            )
    }
    }

    function editInputOnChange(event) {
        event.preventDefault();
        console.log(event);
        console.log(event.target.value);
        console.log(event.target.name);
        const menuItemCopy = {...menuItemData};
        menuItemCopy[event.target.name] = event.target.value;
        console.log(menuItemCopy);
        setMenuItemData(menuItemCopy);
    }

    function fillEditMenuItemFieldsWithData() {
        setEditMenuItemData({
            name: menuItem.name,
            description: menuItem.description,
            price: menuItem.price,
            imgUrl: menuItem.imgUrl,
        });
    }
    
    function handleEditButtonClick() {
        fillEditMenuItemFieldsWithData();
        setShowEditMenu(true);
    }

    return (
        <Wrapper className="menu-item">
            {renderEditMenu()}
            <ItemDetails>
                <h3 className="display-name">{menuItemData.name}</h3>
                <div className="display-price">{menuItemData.price}</div>
            </ItemDetails>
            <div className="display-description">{menuItemData.description}</div>

            <img src={menuItemData.imgUrl} alt={menuItemData.imgAlt} className="display-imgUrl"/>
            <div className="delete-wrapper">
                <button className="edit-button" onClick={() => handleEditButtonClick()}>Edit</button>
                <button
                className="delete-button"
                onClick={() => props.clickDelete(menuItemData)}
                >Delete</button>
            </div>
        </Wrapper>
    );
}
