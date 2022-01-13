import React from 'react';
import { mount } from '@cypress/react';
import Menu from '../../src/components/menu/Menu';

const newMenuItemFieldNames = ['name', 'description', 'price', 'imgUrl'];

// describe edit menu item button
describe('Edit menu item button', () => {
	beforeEach(() => {
		mount(<Menu />);
	});

	it('Should exist.', () => {
		cy.get('.menu-item .edit-button').should('exist');
	});

	it('Should show the edit form of the menu item when clicked.', () => {});
});

// describe edit form
// it('Should have fields for name, description, price, and imgUrl.', () =>{})

// describe cancel button
// it('Should exist.', () =>{})
// it('Should hide the edit form when clicked.', () =>{})
// it('Should revert the menu item back to its pre-editing state', () => {})

// describe submit button
// it('Should exist.', () =>{})
// it('Should hide the edit menu form', () =>{})

// describe editing menu items
// it('Should edit the menu item immediately, visible in the DOM', () => {})
