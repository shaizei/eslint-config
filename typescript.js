const parserOptions = require('./utils/parserOptions');
const env = require('./utils/env');
const plugins = require('./utils/plugins');
const extensions = require('./utils/extensions');
const rules = require('./utils/rules');
const settings = require('./utils/settings');

const eslintConfigForTS = {
  parserOptions: {
    ...parserOptions,
    useJSXTextNode: true,
    project: require('@shaizei/typescript-config'),
    warnOnUnsupportedTypeScriptVersion: true,
  },
  env,
  rules,
  settings,
  plugins: [...plugins, '@typescript-eslint'],
  extends: [...extensions, 
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser'
};

module.exports = eslintConfigForTS;
