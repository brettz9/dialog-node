import js from '@eslint/js';
import globals from 'globals';
import styles from '@stylistic/eslint-plugin-js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node
    },
    plugins: {
      '@stylistic': styles
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
      '@stylistic/semi': 'error'
    }
  }
];
