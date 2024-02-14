//const { defineConfig } = require("cypress");
//const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
//const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require("fs");


const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// async function setupNodeEvents(on, config) {
//     await preprocessor.addCucumberPreprocessorPlugin(on, config);

//     on(
//         "file:preprocessor",
//         createBundler({
//             plugins: [createEsbuildPlugin.default(config)],
//         })
//     );

//     // Make sure to return the config object as it might have been modified by the plugin.
//     return config;
// }

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", 
    browserify.default(config)
  );
  return config;
}

module.exports = defineConfig({
  fixturesFolder: 'fixtures',
  //chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 20000,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: 'http://www.webdriveruniversity.com/',
    env: {
      environment: 'QA',
    },
    supportFile: 'support/e2e.ts',
    specPattern: '**/*.feature',
    screenshotsFolder: 'tmp/screenshots',
    videosFolder: 'tmp/videos',
    //experimentalSkipDomainInjection: ['*.hager.com'],
    // experimentalWebKitSupport: true,
    //setupNodeEvents,
    //  on('file:preprocessor', tagify(config));

    //  },
  },
  /*env: {
    auth0_username: process.env.AUTH0_USERNAME,
    auth0_password: process.env.AUTH0_PASSWORD,
    auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,
    auth0_audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    auth0_scope: process.env.REACT_APP_AUTH0_SCOPE,
    auth0_client_id: process.env.REACT_APP_AUTH0_CLIENTID,
    auth0_client_secret: process.env.AUTH0_CLIENT_SECRET
  }*/
});
