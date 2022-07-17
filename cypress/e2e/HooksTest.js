/// <reference types="Cypress" />

describe('Framework suite', () => {
  let exampleData = {};

  before(() => {
    cy.fixture('example').then((data) => {
      exampleData = data;
    });
  });

  beforeEach(() => {
    exampleData.email = 'new@cypress.io';
  });

  after(() => {});

  afterEach(() => {});

  it('First framework test case', () => {
    expect(exampleData.email).to.not.equal('hello@cypress.io');
  });

  it('Seond test case in framework ', () => {
    expect(exampleData.email).to.equal('new@cypress.io');
  });

  it('Select Product ', () => {
    cy.visit('/shop');

    exampleData.products.forEach((product) => {
      cy.selectProduct(product);
    });
  });
});
