export default antfu({
  react: true,
  typescript: true,
  lessOpinionated: true,
  isInEditor: false,

  stylistic: {
    semi: true,
  },

  formatters: {
    css: true,
  },

  ignores: [
    'migrations/**/*',
    'next-env.d.ts',
  ],
}, 
// ... your other configs
{
  rules: {
    'no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'import/no-unresolved': 'off', // Optional: disable unresolved import warnings
  }
});
