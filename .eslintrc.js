module.exports = {
  env: {
    browser: true,
    es2021: true // Latest ECMAScript version
  },
  extends: [
    'airbnb-base', // Airbnb base style guide
    'prettier' // Prettier plugin
  ],
  parserOptions: {
    ecmaVersion: 'latest', // Always use the latest ECMAScript version
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': 0, // Disable linebreak style enforcement (useful for cross-platform)
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ], // Allow only one empty line
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id']
      }
    ], // Allow underscore for `_id` (common in MongoDB)
    'import/newline-after-import': [
      'error',
      {
        count: 1
      }
    ], // Require one newline after imports
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always', // Enforce space before anonymous functions
        named: 'never', // No space before named functions
        asyncArrow: 'always' // Space before async arrow functions
      }
    ],
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ], // Allow parameter reassignment, but not for their properties
    'new-cap': 0, // Disable enforcing capitalization for new instances
    'max-len': [
      'error',
      {
        code: 300
      }
    ], // Set maximum line length to 300 characters
    'no-use-before-define': ['error', { functions: false, variables: true }],
    'prettier/prettier': ['error']
  },
  plugins: ['prettier']
};
