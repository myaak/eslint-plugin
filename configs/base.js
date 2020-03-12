module.exports = {
  // root: true,
  env: {
    browser: true,
    node: true,
    es6: true, // @NOTE: для глобальных переменных типа Promise
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    // 'plugin:vue/strongly-recommended',
    'airbnb-base',
  ],
  globals: {
  },
  rules: {
    'object-curly-newline': ['off'], // не понял глубокого смысла этого правила...
    'prefer-destructuring': ['off'], // сложно искать работу с частями ДТОшек
    'global-require': ['off'], // не актуально для вебпака
    'quote-props': ['error', 'consistent-as-needed'],
    'no-plusplus': ['off'], // потому что WTF?!
    'arrow-body-style': ['off'], // проще ставить бряки если есть скобочки, пусть они и не нужны
    'consistent-return': ['off'], // функции не всегда возвращают значение
    'no-param-reassign': ['error', { props: false }], // потому что reduce
    'no-useless-return': ['off'], // потому что идите в жопу. Пишу как хочу, из-за этого не сломается
    'arrow-parens': ['off'], // зачем оборачивать то, что не нужно?
    'eqeqeq': ['warn', 'always', { null: 'ignore' }], // в airbnb был error
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }], // функции с пробелами перед скобками - дичь.
    'func-names': ['error', 'never'], // зачем давать имена анонимным функциям? о_О

    'linebreak-style': ['off'],
    'no-trailing-spaces': ['error'],
    'eol-last': ['error'],

    'no-console': ['error', { allow: ['warn', 'error'] }], // варны и эрроры - ок

    'no-debugger': ['error'],
    'no-unused-vars': ['error', { args: 'none' }], // просто переменные - error, аргументы в методе - норм.

    'prefer-const': ['off'],
    'max-len': ['off'],
    'space-infix-ops': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'no-restricted-syntax': ['off'],

    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'brace-style': ['error', 'stroustrup'],

    'indent': ['error', 2, {
      SwitchCase: 1,
    }],
  },
};
