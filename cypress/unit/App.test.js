import React from 'react';
import { mount } from '@cypress/react';
import App from '../../src/App';

it('should exist', () => {
	mount(<App />);
	cy.get('main.App').should('be.visible');
});
