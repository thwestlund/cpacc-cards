module.exports = {
    // ...
    extends: ['plugin:svelte/recommended'],
    // ...
    parser: '@typescript-eslint/parser',
    parserOptions: {
      // ...
      project: 'path/to/your/tsconfig.json',
      extraFileExtensions: ['.svelte'] // This is a required setting in `@typescript-eslint/parser` v4.24.0.
    },
    overrides: [
      {
        files: ['*.svelte'],
        parser: 'svelte-eslint-parser',
        // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
        parserOptions: {
          parser: '@typescript-eslint/parser'
        }
      }
      // ...
    ],
    ignorePatterns: ['.eslintrc.cjs', 'your-build-folder/*'], // Ignore build output if necessary 
    // ...
  };