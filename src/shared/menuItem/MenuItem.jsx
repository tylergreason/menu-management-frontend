import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { searchUrl } from '../constants';

const Wrapper = styled.div`
    width: 20rem;
    border: 1px solid black; 
    margin: 1rem;
    display: flex; 
    flex-flow: column;
    justify-content: center;
    align-items: center;
img {
    width: 75%;
}
`;

const ItemDetails = styled.div`
    display: flex;
    flex-flow: row;
    width: 100%;
    justify-content: space-between;

`;

export function MenuItem(props) {
    return (
        <Wrapper className="menu-item">
            <h3>{props.name}</h3>
            <ItemDetails>
                <div>{props.description}</div>
                <div>${props.price}</div>
            </ItemDetails>
                <img src={props.imgUrl} alt=""/>
        </Wrapper>
    );
}
