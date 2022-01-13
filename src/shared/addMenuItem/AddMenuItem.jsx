import React, {useState} from 'react';
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

export default function AddMenuItem(props) {

    const [menuItem, setMenuItem] = useState({
        name: '',
        description: '', 
        price: '', 
        imgUrl: ''
    });

    const [formValidity, setFormValidity] = useState(false);

    function checkFormValidity(newMenuItem) {
        setFormValidity(!Object.keys(newMenuItem).find(prop => !newMenuItem[prop]?.toString().trim()?.length))
    }

    function formInputOnChange(event) {
        const menuItemCopy = {...menuItem};
        menuItemCopy[event.target.name] = event.target.value;
        setMenuItem(menuItemCopy);
        checkFormValidity(menuItemCopy);
    }

    function renderFormInputs() {
        const inputsToRender = ['name', 'description', 'price', 'imgUrl'];
        return inputsToRender.map((input, idx) => {
            return (
                <div key={idx}>
            <label htmlFor={input}>
                Item {input}: 
            </label>               
                <input type="text" name={input} onChange={formInputOnChange}/>
                </div>
            )
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit(menuItem);
    }

    return(
        <Form id="add-menu-item" onSubmit={handleSubmit}>
            <h3>Add Menu Item</h3>
            {renderFormInputs()}
            <input disabled={!formValidity} type="submit" value="Submit"></input>
            <button class="clear-form">Clear</button>
        </Form>
    )
}