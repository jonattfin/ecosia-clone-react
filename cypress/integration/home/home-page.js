/// <reference types="cypress" />

export const getSearchInput = () => cy.getBySel('searchInput');

export const getCountriesTitle = () => cy.getBySel('countries-title');
export const getCountriesSubtitle = () => cy.getBySel('countries-subtitle');

export const getMapTitle = () => cy.getBySel('map-title');
export const getMapDiscoverProjectsLink= () => cy.getBySel('discover-projects');

export const getReportsTitle = () => cy.getBySel('reports-title');
export const getReportsLink= () => cy.getBySel('explore-reports');

export const getJoinUsTitle = () => cy.getBySel('join-us-title');
export const getShareEcosiaButton = () => cy.getBySel('share-ecosia');

