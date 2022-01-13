import React from 'react';
import { mount } from '@cypress/react';
import Menu from '../../src/components/menu/Menu';

const newMenuItemFieldNames = ['name', 'description', 'price', 'imgUrl'];

function fillNewMenuItemFields() {
	newMenuItemFieldNames.forEach((key) => {
		cy.get(`#add-menu-item input[name="${key}"]`).type(key);
	});
}

function checkAllNewItemFieldsAreEmpty() {
	newMenuItemFieldNames.forEach((field) => {
		cy.get(`#add-menu-item input[name="${field}"]`)
			.invoke('val')
			.should('be.empty');
	});
}

describe('Add menu item', () => {
	beforeEach(() => {
		mount(<Menu />);
	});

	it('should exist.', () => {
		cy.get('#add-menu-item').should('be.visible');
	});

	it('should have a submit button', () => {
		cy.get('#add-menu-item input').contains('Submit');
		cy.get('#add-menu-item input').should('be.visible');
	});

	it('Its submit button should be disabled if any input field is empty', () => {
		fillNewMenuItemFields();
		cy.get('#add-menu-item input[name="imgUrl"]').clear();
		cy.get('#add-menu-item input').should('be.disabled');
	});

	it('submit button is not disabled if all input fields are not empty', () => {
		fillNewMenuItemFields();
		cy.get('#add-menu-item input').should('not.be.disabled');
	});

	it('submit button submits the new menu item, and that item appears in the list of menu items', () => {
		fillNewMenuItemFields();

		const initialMenuItemQuantity = 20;
		cy.get('.menu-item')
			.its('length')
			.should('eq', initialMenuItemQuantity);
		cy.get('#add-menu-item input[type="submit"]').click();
		cy.get('.menu-item')
			.its('length')
			.should('eq', initialMenuItemQuantity + 1);
	});

	it('should have a clear button', () => {
		cy.get('#add-menu-item button.clear-form').contains('Clear');
		cy.get('#add-menu-item button.clear-form').should('be.visible');
	});

	it('clear button is disabled if all fields are empty', () => {
		cy.get('#add-menu-item button.clear-form').should('be.disabled');
	});

	it('clear button is not disabled if any field is empty', () => {
		cy.get('#add-menu-item input[name="name"]').type('name');
		cy.get('#add-menu-item button.clear-form').should('not.be.disabled');
	});

	it('clear button clears all text inputs on click', () => {
		fillNewMenuItemFields();

		cy.get('#add-menu-item button.clear-form').click();
		checkAllNewItemFieldsAreEmpty();
	});

	it('Submit button clears form on click', () => {
		fillNewMenuItemFields();
		cy.get('#add-menu-item input[type="submit"]').click();
		checkAllNewItemFieldsAreEmpty();
	});
});
