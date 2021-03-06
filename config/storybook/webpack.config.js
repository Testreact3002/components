const path = require('path');
const webpackCfg= require('../webpack.js');
const Dotenv = require('dotenv-webpack');
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
   
  	
  /*config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, '../'),
  });*/
  config.plugins.push(new Dotenv());

  // Return the altered config
  return config;
};

