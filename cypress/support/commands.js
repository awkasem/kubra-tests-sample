Cypress.Commands.add('getNumberOfKubraPostCalls', (arr) => {
    let list = [];
    arr.forEach((call) => {
        if (call.url.includes('kubra.com')) {
            list.push(call.url);
        }
    });
    return list;
});
