import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 20rem;

    border: 1px solid black;
    padding: 1rem;

    h3 {
        margin: auto;
        width: 100%;
        text-align: center;
    }

    div {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        margin: 0.5rem 0;
    }
    label {
        font-style: capitalize;
    }
`;

export default function AddMenuItem() {

    function renderFormInputs() {
        const inputsToRender = ['name', 'description', 'price', 'imgUrl'];
        return inputsToRender.map((input, idx) => {
            return (
                <div key={idx}>
            <label htmlFor={input}>
                Item {input}: 
            </label>               
                <input type="text" name={input}/>
                </div>
            )
        })
    }

    return(
        <Form id="add-menu-item">
            <h3>Add Menu Item</h3>
            {renderFormInputs()}
            <input type="submit" value="Submit"></input>
        </Form>
    )
}