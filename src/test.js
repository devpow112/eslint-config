import { defineConfig } from 'eslint/config';
import { nodeConfigs } from './node.js';
import pluginChaiFriendly from 'eslint-plugin-chai-friendly';
import pluginMocha from 'eslint-plugin-mocha';

export const testConfigs = defineConfig([
  ...nodeConfigs,
  pluginMocha.configs.recommended,
  pluginChaiFriendly.configs.recommendedFlat,
  {
    files: ['test/**/*.js'],
    rules: {
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-identical-title': 'error',
      'chai-friendly/no-unused-expressions': 'error'
    }
  }
]);
