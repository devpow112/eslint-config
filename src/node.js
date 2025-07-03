import { commonConfigs } from './common.js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export const nodeConfigs = defineConfig([
  ...commonConfigs,
  {
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.node,
        ...globals.es2023
      }
    }
  }
]);
