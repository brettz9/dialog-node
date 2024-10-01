import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node
    }
  },
  {
    files: ['test-dialog-node.js', 'example.js'],
    rules: {
      'no-console': 'off'
    }
  },
  {
    rules: {
    }
  }
];
