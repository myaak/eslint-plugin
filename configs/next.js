module.exports = {
  extends: [
    require.resolve('./react'),
  ],
  overrides: [
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
