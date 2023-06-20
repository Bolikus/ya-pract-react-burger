// @ts-nocheck
export {};
/// <reference types="cypress" />

describe("App initialization", () => {
  it("Loading inrgredients on main page", () => {
    cy.seedAndVisit();

    cy.get("[data-test='Булки'] > a").should("have.length", 2);
    cy.get("[data-test='Соусы'] > a").should("have.length", 3);
    cy.get("[data-test='Начинки'] > a").should("have.length", 5);
  });
});
