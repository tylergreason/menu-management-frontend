import React from 'react';
import { mount } from '@cypress/react';
import Menu from '../../src/components/menu/Menu';

it('renders menu items', () => {
	mount(<Menu />);
	cy.get('section#menu').should('be.visible');
	cy.get('.menu-item').should('be.visible');
});

describe('Delete Menu Item', () => {
	beforeEach(() => {
		mount(<Menu />);
	});
	it('Menu item elements should have a delete button.', () => {
		cy.get('.menu-item').find('.delete-button').should('be.visible');
	});

	it("Clicking a menu item's delete button should bring up the delete confirmation modal.", () => {
		cy.get('#delete-confirmation-modal').should('not.be.visible');
		cy.get('#delete-confirmation-modal').should('exist');
		cy.get('.menu-item .delete-button').first().click();
		cy.get('#delete-confirmation-modal').should('not.have.class', 'hidden');
	});

	it('Confirming the deletion of a menu item should remove it from menuItemData and hide the delete modal.', () => {
		const initialMenuItemQuantity = 20;
		cy.get('.menu-item')
			.its('length')
			.should('eq', initialMenuItemQuantity);
		cy.get('.menu-item .delete-button').first().click();
		cy.get('#delete-confirmation-modal button')
			.first()
			.click({ force: true });
		cy.get('.menu-item')
			.its('length')
			.should('eq', initialMenuItemQuantity - 1);
		cy.get('#delete-confirmation-modal').should('not.be.visible');
	});

	it('Choosing to not delete an item should not remove the item and should hide the delete modal.', () => {
		const initialMenuItemQuantity = 20;
		cy.get('.menu-item')
			.its('length')
			.should('eq', initialMenuItemQuantity);
		cy.get('.menu-item .delete-button').first().click();
		cy.get('#delete-confirmation-modal button:nth-of-type(2)').click({
			force: true,
		});
		cy.get('.menu-item')
			.its('length')
			.should('eq', initialMenuItemQuantity);
		cy.get('#delete-confirmation-modal').should('not.be.visible');
	});
});

describe.only('Add menu item', () => {
	beforeEach(() => {
		mount(<Menu />);
	});

	it('should exist.', () => {
		cy.get('#add-menu-item').should('exist');
	});

	it('should have a submit button', () => {
		cy.get('#add-menu-item input').contains('Submit');
	});

	it('Its submit button should be disabled if any input field is empty', () => {
		cy.get('#add-menu-item input[name="name"]').type('name');
		cy.get('#add-menu-item input[name="description"]').type('description');
		cy.get('#add-menu-item input[name="price"]').type('price');
		cy.get('#add-menu-item input[name="imgUrl"]').clear();
		cy.get('#add-menu-item input').should('be.disabled');
	});

	it('submit button is not disabled if all input fields are not empty', () => {
		cy.get('#add-menu-item input[name="name"]').type('name');
		cy.get('#add-menu-item input[name="description"]').type('description');
		cy.get('#add-menu-item input[name="price"]').type('price');
		cy.get('#add-menu-item input[name="imgUrl"]').type('imgUrl');
		cy.get('#add-menu-item input').should('not.be.disabled');
	});

	it.only('submit button submits the new menu item, and that item appears in the list of menu items', () => {
		cy.get('#add-menu-item input[name="name"]').type('name');
		cy.get('#add-menu-item input[name="description"]').type('description');
		cy.get('#add-menu-item input[name="price"]').type('price');
		cy.get('#add-menu-item input[name="imgUrl"]').type('imgUrl');

		const initialMenuItemQuantity = 20;
		cy.get('.menu-item')
			.its('length')
			.should('eq', initialMenuItemQuantity);
		cy.get('#add-menu-item input[type="submit"]').click();
		cy.get('.menu-item')
			.its('length')
			.should('eq', initialMenuItemQuantity + 1);
	});
	// should have a clear button
	// clear button is disabled if all fields are empty
	// clear button clears inputs on submit
});
