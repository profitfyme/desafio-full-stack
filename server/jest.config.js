module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules'],
  collectCoverageFrom: ['src/**/*.ts(x)'],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
