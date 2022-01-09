import React, {useState} from 'react';
import styled from 'styled-components';

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(0,0,0, 10%);
    display: flex;
    justify-content: center;
    align-items: center;

    &.hidden {
        display: none;
    }

    .wrapper {
        background-color: white;
        border: 1px solid black;
        width: 20rem;
        height: 10rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-flow: column;
        padding: 1rem;

        .button-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
    }
`;


export function DeleteConfirmation(props) {

    return(
        <Background className={props.hidden ? 'hidden' : ''}>
        <div className="wrapper">
            <div>Are you sure you want to delete this dish?</div>
            <div>{props?.itemToDelete?.name || ''}</div>
            <div className="button-wrapper">
                <button onClick={() => props.clickYes()}>Yes</button>
                <button onClick={() => props.clickNo()}>No</button>
            </div>
        </div>
        </Background>
    )
}