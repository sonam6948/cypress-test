/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')

/*module.exports = (on, config) => {
  // on('file:preprocessor', webpack({
  //  webpackOptions: require('@vue/cli-service/webpack.config'),
  //  watchOptions: {}
  // }))

  return Object.assign({}, config, {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js',
  });
};*/


const { startDevServer } = require('@cypress/webpack-dev-server');
const webpackConfig = require('@vue/cli-service/webpack.config.js');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@cypress/browserify-preprocessor");



const tagify = require('cypress-tags');
/**
 * @type {Cypress.PluginConfig}
 */



// module.exports = (on, config) => {
//   on('dev-server:start', (options) =>
//     startDevServer({
//       options,
//       webpackConfig,
//     }),
//   );
  module.exports = (on) => {
    const options = {
      ...browserify.defaultOptions,
      typescript: require.resolve("typescript"),
    };
    on("file:preprocessor", cucumber(options));
  }

  //on('file:preprocessor', cucumber());
  on('after:run', (results) => {

    if (results) {

      fs.mkdirSync("cypress/.run", { recursive: true });

      fs.writeFile("cypress/.run/results.json", JSON.stringify(results));

    }
    (on, config) => {
      // `on` is used to hook into various events Cypress emits
      // `config` is the resolved Cypress config
      on('file:preprocessor', tagify(config));
    }
    

  })
  


  return config;




