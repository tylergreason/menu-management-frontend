import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 20rem;
`;

const ItemDetails = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
`;

export function MenuItem() {

    return (
        <Wrapper className="menu-item">
            <h3>Item Name</h3>
            <ItemDetails>
                <div>Description</div>
                <div>$XX</div>
            </ItemDetails>
        </Wrapper>
    );
}
