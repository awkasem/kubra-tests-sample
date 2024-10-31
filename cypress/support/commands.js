Cypress.Commands.add('getNumberOfKubraPostCalls', (arr) => {
    return arr.filter(call => call.url.includes('kubra.com'));
});
