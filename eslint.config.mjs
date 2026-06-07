import pluginVue from 'eslint-plugin-vue'
import vueA11y from 'eslint-plugin-vuejs-accessibility'
import tsParser from '@typescript-eslint/parser'

export default [
  // Vue 3 essential correctness rules only (no opinionated style)
  ...pluginVue.configs['flat/essential'],
  // a11y rules
  ...vueA11y.configs['flat/recommended'],
  // TypeScript parser for .vue script blocks
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
      },
    },
  },
  // TypeScript parser for plain .ts files
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
  },
]
