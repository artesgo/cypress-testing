import { Common } from "../utils/click";

export class Youtube {
  static open() {
    cy.visit('www.youtube.com')
  }

  static search(searchTerm) {
    Common.enter('input#search');
    Common.type(searchTerm);
    Common.click('button#search-icon-legacy');
  }
}