const { FlatCompat } = require('@eslint/eslintrc');
const { includeIgnoreFile } = require('@eslint/compat');
const js = require('@eslint/js');
const path = require('node:path');

const gitignorePath = path.resolve(__dirname, '.gitignore');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = [
  includeIgnoreFile(gitignorePath),
  ...compat.extends('./src/node.js')
];