import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import * as helpers from '../helpers';
import * as homePage from './home-page';

Given('The user opens the home page', (page) => {
  helpers.openPage('/');
})

describe("User types for a query in the search input", () => {
  When('The user search for the query in the search input', () => {
    const q = "hello world";

    homePage.getSearchInput()
      .wait(100)
      .type(q).should('have.value', q)
      .type('{enter}')
  });

  Then('The user is redirected to the results page', () => {
    helpers.isPage("/search/hello world");
  });
})

describe("The countries section is shown", () => {
  Then('The countries section title and subtitle are shown', () => {

    homePage.getCountriesTitle()
      .should('be.visible')
      .should('have.text', 'Where are your trees being planted?')

    homePage.getCountriesSubtitle()
      .should('be.visible')
      .should('have.text', 'We plant in 30+ countries with local organizations')
  });
});

describe("The map section is shown", () => {
  Then('The map section title and discover our project link are shown', () => {
    homePage.getMapTitle()
      .should('be.visible')
      .should('have.text', 'Trees planted by ecosia users')

    homePage.getMapDiscoverProjectsLink()
      .should('be.visible')
      .should('contain.text', 'Discover our projects')
  });
});


describe("The financial section is shown", () => {
  Then('The financial section title and explore financial reports are shown', () => {
    homePage.getReportsTitle()
      .should('be.visible')
      .should('have.text', 'Monthly financial reports')

    homePage.getReportsLink()
      .should('be.visible')
      .should('contain.text', 'Explore our financial reports')
  });
});

describe("The join section is shown", () => {
  Then('The join section title and share ecosia button are shown', () => {

    homePage.getJoinUsTitle()
      .should('be.visible')
      .should('have.text', 'Join 15 million people who already use Ecosia')

    homePage.getShareEcosiaButton()
      .should('be.visible')
  });
});

