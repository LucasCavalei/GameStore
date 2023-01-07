// Setting up Jest with ESM
// https://gist.github.com/rstacruz/511f43265de4939f6ca729a3df7b001c
module.exports = {
  collectCoverage: true,
  coverageProvider: 'v8',
  clearMocks: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/client/**',
  ],
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  // testEnvironment: 'jsdom',
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // abaixo estou iginorando cleint por enquanto
  coveragePathIgnorePatterns: ['node_modules', 'client'],
  // testEnvironment: 'jsdom',
  testEnvironment: 'node',
  // testMatch: ['**/__tests__/**/*.spec.js?(x)',
  // "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.css$': 'jest-transform-css',
    '\\.m?jsx?$': 'jest-esm-transformer',
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  globals: {},

  // transform: {},
  verbose: true,
};
