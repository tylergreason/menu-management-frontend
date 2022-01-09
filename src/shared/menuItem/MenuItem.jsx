import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { searchUrl } from '../constants';

const Wrapper = styled.div`
    width: 20rem;
`;

const ItemDetails = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
`;

export function MenuItem(props) {
    return (
        <Wrapper className="menu-item">
            <h3>{props.name}</h3>
            <ItemDetails>
                <div>{props.description}</div>
                <div>${props.price}</div>
                <img src={props.imgUrl} alt=""/>
            </ItemDetails>
        </Wrapper>
    );
}
