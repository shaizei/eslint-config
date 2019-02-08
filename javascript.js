const parserOptions = require('./utils/parserOptions');
const env = require('./utils/env');
const plugins = require('./utils/plugins');
const extensions = require('./utils/extensions');
const rules = require('./utils/rules');
const settings = require('./utils/settings');

const eslintConfigForJS = {
  parserOptions,
  env,
  plugins,
  rules,
  settings,
  extends: extensions,
  parser: 'babel-eslint',
};

module.exports = eslintConfigForJS;
