window.JetPlugins = {
	hooks: {
		applyFilters: ( hook, val ) => val,
		doAction: jest.fn(),
		addFilter: () => {},
	},
};

window.JetFormBuilderSettings = {
	strict_mode: true,
	replaceAttrs: [
		'href',
		'src',
		'alt',
		'title',
	],
};

window.wp = {
	i18n: {
		__: ( text ) => text,
		sprintf: ( text ) => text,
	},
};

window.jQuery = () => {};