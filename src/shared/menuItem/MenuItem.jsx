import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 20rem;
    border: 1px solid black; 
    margin: 1rem;
    display: flex; 
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem 1rem 1rem;  
    
    h3 {
        text-transform: capitalize;
    }
    img {
        width: 100%;
    }

    .description {
        width: 100%;
        margin-bottom: 1rem;
    }

    .delete-wrapper {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-content: center;
        margin-top: 1rem;
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

const DeleteButton = styled.button`
    background-color: RGBA(0,0,0,0);
    color: black;
    font-size: 1rem;
    border: 1px solid red;
    border-radius: 5%;
`;

export function MenuItem(props) {
    return (
        <Wrapper className="menu-item">
            <ItemDetails>
                <h3>{props.name}</h3>
                <div>${props.price}</div>
            </ItemDetails>
            <div className="description">{props.description}</div>

            <img src={props.imgUrl} alt={props.imgAlt}/>
            <div className="delete-wrapper">
                <DeleteButton>Delete</DeleteButton>
            </div>
        </Wrapper>
    );
}
