module.exports = {
  extends: [
    require.resolve('./react'),
  ],
  overrides: [
    // TS/JS
    {
      files: ['src/**/*.ts', 'src/**/*.js'],
      excludedFiles: ['src/types/generated/**/*.ts', 'src/types/generated/**/*.js'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              camelCase: true,
              pascalCase: true,
            },
          },
        ],
      },
    },
    // Components/Layouts
    {
      files: ['src/**/*.tsx', 'src/**/*.jsx'],
      excludedFiles: ['src/pages/**/*.tsx', 'src/pages/**/*.jsx'],
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
    // Pages
    {
      files: ['src/pages/**/*.tsx', 'src/pages/**/*.jsx'],
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
