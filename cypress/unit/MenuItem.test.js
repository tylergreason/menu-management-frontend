import React from 'react';
import { mount } from '@cypress/react';
import Menu from '../../src/components/menu/Menu';

const newMenuItemFieldNames = ['name', 'description', 'price', 'imgUrl'];

function openEditMenuItemForm() {
	return cy.get('.menu-item .edit-button').first().click();
}

function getEditForm() {
	return cy.get('.menu-item .edit-form');
}

// describe edit menu item button
describe('Edit menu item button', () => {
	beforeEach(() => {
		mount(<Menu />);
	});

	it('Should exist.', () => {
		cy.get('.menu-item .edit-button').should('be.visible');
	});

	it('Should show the edit form of the menu item when clicked.', () => {
		openEditMenuItemForm();
		getEditForm().should('be.visible');
	});
});

describe('Edit form', () => {
	it('Should have fields for name, description, price, and imgUrl.', () => {
		mount(<Menu />);
		openEditMenuItemForm();
		newMenuItemFieldNames.forEach((fieldName) => {
			getEditForm().get(`input[name=${fieldName}]`).should('be.visible');
		});
	});
});

describe('Cancel button', () => {
	beforeEach(() => {
		mount(<Menu />);
		openEditMenuItemForm();
	});

	it('Should exist.', () => {
		getEditForm().get('.cancel-edit-button').should('be.visible');
	});

	it('Should hide the edit form when clicked.', () => {
		getEditForm().get('.cancel-edit-button').first().click();
		getEditForm().should('not.exist');
	});
});
// it('Should revert the menu item back to its pre-editing state', () => {})

// describe submit button
// it('Should exist.', () =>{})
// it('Should be disabled if any form inputs are empty', () => {})
// it('Should hide the edit menu form', () =>{})

// describe editing menu items
// it('Should edit the menu item immediately, visible in the DOM', () => {})
