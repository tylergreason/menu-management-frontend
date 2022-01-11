import React from 'react';
import { mount } from '@cypress/react';
import Menu from './components/menu/Menu';

it('renders menu items', () => {
	mount(<Menu />);
	cy.get('section#menu').should('be.visible');
});
