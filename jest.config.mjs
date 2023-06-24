import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */

const config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['<rootDir>/**/*.{tsx,ts}'],
};

export default createJestConfig(config);
