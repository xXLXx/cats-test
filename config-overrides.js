const path = require('path');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.alias = Object.assign(config.resolve.alias || {}, {
    Components: path.resolve(__dirname, 'src/components/'),
    Routes: path.resolve(__dirname, 'src/routes/'),
    Api: path.resolve(__dirname, 'src/api/'),
    Actions: path.resolve(__dirname, 'src/actions/'),
    Selectors: path.resolve(__dirname, 'src/selectors/')
  });

  return config;
}