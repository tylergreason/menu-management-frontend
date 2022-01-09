import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 20rem;
    border: 1px solid black; 
    margin: 1rem;
    display: flex; 
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
    h3 {
        text-transform: capitalize;
    }
    img {
        width: 100%;
    }

    .description {
        width: 100%;
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

export function MenuItem(props) {
    const imgAlt = 'Food photo, tagged ' + props.tags;
    return (
        <Wrapper className="menu-item">
            <ItemDetails>
                <h3>{props.name}</h3>
                <div>${props.price}</div>
            </ItemDetails>
            <div className="description">{props.description}</div>
            <img src={props.imgUrl} alt={imgAlt}/>
        </Wrapper>
    );
}
