import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  // Desactiva todas las reglas de ESLint
  {
    rules: {
      // Desactivar todas las reglas
      'no-unused-vars': 'off',
      'no-console': 'off',
      'vue/no-unused-vars': 'off',
      // Aquí puedes agregar más reglas que quieras desactivar
    },
  },
];
