module.exports = {
  extends: [
    require.resolve('./vue'),
  ],
  settings: {
    'import/resolver': 'nuxt',
  },
  overrides: [
    // Components
    {
      files: ['src/**/*.vue', 'src/**/*.tsx', 'src/**/*.jsx'],
      excludedFiles: ['src/pages/**/*.vue', 'src/layouts/**/*.vue', 'src/pages/**/*.tsx', 'src/layouts/**/*.tsx', 'src/pages/**/*.jsx', 'src/layouts/**/*.jsx'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              pascalCase: true,
            },
          },
        ],
      },
    },
    // Pages/Layouts
    {
      files: ['src/pages/**/*.vue', 'src/layouts/**/*.vue', 'src/pages/**/*.tsx', 'src/layouts/**/*.tsx', 'src/pages/**/*.jsx', 'src/layouts/**/*.jsx'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              kebabCase: true,
            },
          },
        ],
      },
    },
  ]
};
