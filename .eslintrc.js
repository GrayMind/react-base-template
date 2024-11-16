module.exports = {
  extends: ['ali/react', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },
  rules: {
    'react/prop-types': 0,
    'no-console': 0,
  },
};
