import {search} from "../support/utils";

describe('technical assessment', () => {
    beforeEach( () => {
        cy.visit('https://www.kubra.com/')
    });
    context('- verify home page logo and footer', () => {
        it('kubra logo should be visible on home page', () => {
            cy.get('.site-logo svg').should('be.visible');
        });

        it('kubra legal note should be visible and contains expected text', () => {
            cy.get('.legal').contains('all rights reserved', { matchCase: false });
        });
    });
    context('- navigate to career page and click on link', () => {
        it('search for qa engineer posting and click on its link', () => {
            search('career');
            cy.get('#searchresults').should('be.visible');
            cy.get('#searchresults > div:nth-child(2) > h2 > a').click();
            cy.get('.job-listing').should('be.visible');
            cy.task('logger', 'open link in the same tab');
            cy.get('.job-listing')
                .filter(':contains(QA Engineer (Cypress))')
                .invoke('removeAttr','target')
                .click();
        });
    });
});

describe('intercept http requests and verify calls to db', () => {
    const arr = [];
    beforeEach( () => {
        cy.intercept("POST", '**',  (req) => {
            arr.push(req);
            req.continue();
        }).as('calls')
    })
    context('- intercept post calls', async () => {
        it('number of kubra post calls should be equal to 3 when navigating to careers page', () => {
            cy.visit('https://www.kubra.com/about-us/careers');
            cy.wait('@calls');
            cy.getNumberOfKubraPostCalls(arr).then(list => {
                cy.task('logger', 'number of urls: ' + list.length);
                expect(list).to.have.length(3)
            });
        })
    });
})
