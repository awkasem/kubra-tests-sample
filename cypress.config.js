const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        logger(message) {
          console.log('\n' + '>>>> logger: ' + JSON.stringify(message) + ' <<<<\n');
          return null;
        },
      });
    },
    morgan: false
  },
});
