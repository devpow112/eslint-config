import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginStylistic from '@stylistic/eslint-plugin';

export const commonConfigs = defineConfig([{
  linterOptions: {
    reportUnusedInlineConfigs: 'error',
    reportUnusedDisableDirectives: 'error'
  },    
  plugins: {
    js,
    import: pluginImport,
    '@stylistic': pluginStylistic
  },
  extends: [
    'js/recommended'
  ],
  rules: {
    'arrow-body-style': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'implicit-arrow-linebreak': 'off',
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'max-len': 'error',
    'newline-per-chained-call': 'off',
    'no-multi-spaces': 'error',
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'all' }],
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'sort-imports': ['error', { ignoreCase: true }],
    strict: ['error', 'never'],
    'space-before-function-paren': [
      'error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }
    ],
    'spaced-comment': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'import/namespace': ['error', { allowComputed: true }],
    'import/no-absolute-path': 'error',
    '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
    '@stylistic/comma-dangle': ['error', 'never']
  }
}]);
