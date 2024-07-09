module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		'jest/globals': true,
	},
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended',
	],
	parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		babelOptions: {
			configFile: './.babelrc',
		},
	},
	ignorePatterns: [ '**/build/*', '**/dist/*', '**/lib/*' ],
	rules: {
		'prettier/prettier': 'off',
		'jsdoc/require-param-type': 'off',
		'jsdoc/require-returns-description': 'off',
		'jsdoc/no-undefined-types': 'off',
		'max-lines-per-function': [
			'error',
			{
				max: 50,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		'max-depth': [
			'error',
			2,
		],
		'no-constructor-return': 'error',
		'no-await-in-loop': 'error',
		eqeqeq: [ 'error', 'always' ],
		camelcase: [
			'error',
			{
				properties: 'never',
				ignoreDestructuring: true,
			},
		],
		'no-var': 'error',
		'import/no-unresolved': 'off',
		'@stylistic/arrow-spacing': 'error',
		'@stylistic/block-spacing': 'error',
		'@stylistic/comma-spacing': [
			'error',
			{ before: false, after: true },
		],
		'@stylistic/array-bracket-spacing': [ 'error', 'always' ],
		'@stylistic/computed-property-spacing': [ 'error', 'always' ],
		'@wordpress/i18n-text-domain': [
			'error',
			{
				allowedTextDomain: [ 'jet-form-builder' ],
			},
		],
	},
	plugins: [
		'react',
		'@stylistic',
		'jest',
	],
	globals: {
		window: 'readonly',
		jQuery: 'readonly',
		Vue: 'readonly',
		Vuex: 'readonly',
		wp: 'readonly',
		ajaxurl: 'readonly',
		jfbEventBus: 'writable',
		JetFBComponents: 'writable',
		JetFBActions: 'writable',
		JetFBStore: 'writable',
		JetFBHooks: 'writable',
		JetFormEditorData: 'readonly',
		JetFormBuilderSettings: 'readonly',
		JetFormBuilderAbstract: 'writable',
		JetFormBuilderFunctions: 'writable',
		JetPlugins: 'writable',
	},
};