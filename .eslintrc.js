module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended',
	],
	parserOptions: {
		'sourceType': 'module',
	},
	rules: {
		'prettier/prettier': 'off',
		'jsdoc/require-param-type': 'off',
		'jsdoc/require-returns-description': 'off',
		'jsdoc/no-undefined-types': 'off',
		'complexity': [
			'warn',
			{
				'max': 4,
			},
		],
		'max-lines-per-function': [
			'error',
			{
				'max': 50,
				'skipBlankLines': true,
				'skipComments': true,
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
			{ 'before': false, 'after': true },
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
		'vue',
		'@stylistic',
	],
	'globals': {
		window: 'readonly',
		jQuery: 'readonly',
		Vue: 'readonly',
		Vuex: 'readonly',
		wp: 'readonly',
		safari: 'readonly',
		ajaxurl: 'readonly',
		jfbEventBus: 'writable',
		JetFBComponents: 'writable',
		JetFBActions: 'writable',
		JetFBStore: 'writable',
		JetFBHooks: 'writable',
		JetFormCalculatedField: 'readonly',
		JetFormHiddenField: 'readonly',
		JetFormProgressBar: 'readonly',
		JetFormActionButton: 'readonly',
		JetFormEditorData: 'readonly',
		JetFormBuilderAbstract: 'writable',
		JetFormBuilderFunctions: 'writable',
		JetPlugins: 'writable',
		JetFormBuilderConst: 'writable',
	},
};