export class Common {
  static click(selector, force = false) {
    cy.get(selector).click({ force });
  }

  static enter(selector) {
    cy.get(selector).click().as('selected');
  }

  static type(text) {
    cy.get('@selected').type(text);
  }

  // add more common actions
}