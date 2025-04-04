module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/components/**/*.[jt]s?(x)',
    '**/mixins/*.spec.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  // "collectCoverage": true,
  // "collectCoverageFrom": [
  //     "**/*.{js,vue}",
  //     '!**/node_modules/**',
  //     '!**/*.config.js',
  //     '!**/vendor/**',
  //     '!**/tests/e2e/**',
  //     '!**/main.js',
  //     '!**/coverage/**',
  //     '!./src/router/**',
  //     '!/src/mixins/methods.js'
  // ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}