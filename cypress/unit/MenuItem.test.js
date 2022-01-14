import React from 'react';
import { mount } from '@cypress/react';
import Menu from '../../src/components/menu/Menu';

const newMenuItemFieldNames = ['name', 'description', 'price', 'imgUrl'];

const exampleImgSrc =
	'https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

function openEditMenuItemForm() {
	return cy.get('.menu-item .edit-button').first().click();
}

function getEditForm() {
	return cy.get('.menu-item .edit-form');
}

function getEditMenuItemSubmitButton() {
	return cy.get('.edit-menu-item-wrapper input[type="submit"]');
}

function compareEditMenuValuesToDisplayValues() {
	return newMenuItemFieldNames.forEach((fieldName) => {
		if (fieldName === 'imgUrl') {
			let displaySrc;
			cy.get(`.display-${fieldName}`)
				.first()
				.then(($img) => {
					displaySrc = $img[0].src;
				});
			cy.get(`.edit-${fieldName}`)
				.first()
				.then(($div) => {
					expect(displaySrc).to.eq($div[0].value);
				});
		} else {
			let displayValue;
			cy.get(`.display-${fieldName}`)
				.first()
				.then(($div) => {
					displayValue = $div.text();
				});
			cy.get(`.edit-${fieldName}`)
				.first()
				.then(($div) => {
					expect(displayValue).to.eq($div[0].value);
				});
		}
	});
}

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

	it('Should fill the form with the properties of the selected menu item', () => {
		openEditMenuItemForm();
		compareEditMenuValuesToDisplayValues();
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
	// it('Should revert the menu item back to its pre-editing state', () => {})
});

describe('Editing menu items', () => {
	beforeEach(() => {
		mount(<Menu />);
		openEditMenuItemForm();
	});

	it('Should edit the menu item immediately, visible in the DOM', () => {
		newMenuItemFieldNames.forEach((fieldName) => {
			if (fieldName === 'imgUrl') {
				const editImgInput = cy
					.get(`input.edit-${fieldName}`)
					.first()
					.clear()
					.type(exampleImgSrc);

				const displayImg = cy
					.get(`.display-${fieldName}`)
					.first()
					.then(($img) => {
						expect($img[0].src).to.eq(exampleImgSrc);
					});
			} else {
				cy.get(`.edit-${fieldName}`)
					.first()
					.type('test')
					.then(($input) => {
						cy.get(`.display-${fieldName}`)
							.first()
							.then(($div) => {
								expect($input[0].value).to.eq($div.text());
							});
					});
			}
		});
	});
});

describe('submit button', () => {
	beforeEach(() => {
		mount(<Menu />);
		openEditMenuItemForm();
	});
	it('Should exist.', () => {
		getEditMenuItemSubmitButton().should('be.visible');
	});

	it('Should be disabled if any form inputs are empty', () => {
		cy.get('.menu-item .edit-form input').first().clear();
		getEditMenuItemSubmitButton().should('be.disabled');
	});

	it.only('Should hide the edit menu form when submitted', () => {
		getEditMenuItemSubmitButton().click();
		getEditForm().should('not.exist');
	});
});
// ?? do you need this?? it('Should change the data of the menu item', () => {})

// it('', () => {})
