# ESLint Configuration

[![License][License Badge]](LICENSE)
[![Version][Version Badge]][Version Package]
[![Release][Release Badge]][Release Workflow]
[![Node Version][Node Version Badge]](package.json#L56)

Shareable eslint configuration.

## Installation

```console
npm i -D @devpow112/eslint-config
```

## Usage

The shareable config can be configured in the [ESLint Configuration] file. There
are currently 2 config types `nodeConfigs` and `testConfigs`. They will work for
both `commonjs` and `module` based set-ups.

### `commonjs`

```js
const { nodeConfigs, testConfigs } = require('@devpow112/eslint-config');
const { defineConfig } = require('eslint/config');
const { includeIgnoreFile } = require('@eslint/compat');
const { resolve } = require('node:path');

const gitignorePath = resolve(__dirname, '.gitignore');

module.exports = defineConfig([
  includeIgnoreFile(gitignorePath),
  ...nodeConfigs,
  ...testConfigs
]);
```

### `modules`

```js
import { nodeConfigs, testConfigs } from './src/index.js';
import { defineConfig } from 'eslint/config';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  ...nodeConfigs,
  ...testConfigs
]);
```

## Development

Development can be done on any machine that can install **Node.js**. Only the
latest LTS version is tested against.

### Install Dependencies

Install dependencies via `npm`.

```console
npm i
```

### Linting

Execute linters via `npm`.

```console
# git, javascript, markdown and package.json
npm run lint

# git only
npm run lint:git

# javascript only
npm run lint:js

# markdown only
npm run lint:md

# package.json only
npm run lint:pkg
```

### Fixing

Execute automatic fixers via `npm`.

```console
# javascript, markdown and package.json
npm run fix

# javascript only
npm run fix:js

# markdown only
npm run fix:md

# package.json only
npm run fix:pkg
```

<!-- links -->
[License Badge]: https://img.shields.io/github/license/devpow112/eslint-config?label=License
[Version Badge]: https://img.shields.io/npm/v/@devpow112/eslint-config?label=Version
[Version Package]: https://www.npmjs.com/@devpow112/eslint-config
[Node Version Badge]: https://img.shields.io/node/v/@devpow112/eslint-config
[Release Badge]: https://github.com/devpow112/eslint-config/actions/workflows/release.yml/badge.svg?branch=main
[Release Workflow]: https://github.com/devpow112/eslint-config/actions/workflows/release.yml?query=branch%3Amain
[ESLint Configuration]: https://eslint.org/docs/user-guide/configuring
