import React from 'react';
import { mount } from '@cypress/react';
import Menu from './components/menu/Menu';

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
