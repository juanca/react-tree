module.exports = {
  env: {
    jasmine: true
  },
  globals: {
    enzyme: true,
    'jasmine-enzyme': true,
  },
  rules: {
    "import/no-extraneous-dependencies": ['error', { devDependencies: true }]
  },
};
