module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:vue/strongly-recommended',
  ],
  globals: {
    'Vue': true,
    'Vuex': true,
    'VuelidateValidators': true,
  },
  settings: {
    'import/resolver': 'nuxt',
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/max-attributes-per-line': ['off'],
    'vue/attribute-hyphenation': ['off'],
    'vue/html-self-closing': ['off'],

    'vue/script-indent': ['off'],
  },
  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': ['off'], // @NOTE: 'indent' и 'vue/script-indent' конкурируют, так что отключаем 'indent' для Vue файлов
        'vue/html-indent': ['error', 2, {
          alignAttributesVertically: false,
          closeBracket: 1,
        }],
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
          switchCase: 1,
        }],
      },
    },
  ],
};
