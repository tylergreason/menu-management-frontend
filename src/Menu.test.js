import React from 'react';
import { mount } from '@cypress/react';
import Menu from './components/menu/Menu';

it('renders menu items', () => {
	mount(<Menu />);
	cy.get('section#menu').should('be.visible');
	cy.get('.menu-item').should('be.visible');
});

describe('Delete Menu Item', () => {
	it('Menu item elements should have a delete button.', () => {
		mount(<Menu />);
		cy.get('.menu-item').find('.delete-button').should('be.visible');
	});
});
