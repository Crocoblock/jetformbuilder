/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
	projects: [
		'<rootDir>/assets/src/test',
	],

	// Automatically clear mock calls, instances, contexts and results before
	// every test
	clearMocks: true,

	// The test environment that will be used for testing
	testEnvironment: 'jsdom',
};

module.exports = config;
