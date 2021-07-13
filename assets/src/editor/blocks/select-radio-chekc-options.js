const { __ } = wp.i18n;

const { jetEngineVersion } = window.JetFormEditorData;
const { versionCompare } = JetFBActions;

const listFrom = [
	{
		"value": "manual_input",
		"label": __( 'Manual Input', 'jet-form-builder' ),
	},
	{
		"value": "posts",
		"label": __( 'Posts', 'jet-form-builder' ),
	},
	{
		"value": "terms",
		"label": __( 'Terms', 'jet-form-builder' ),
	},
	{
		"value": "meta_field",
		"label": __( 'Meta Field', 'jet-form-builder' ),
	},
	{
		"value": "generate",
		"label": __( 'Generate Dynamically', 'jet-form-builder' ),
	},
];

if ( "" !== jetEngineVersion ) {
	listFrom.push( {
		"value": "glossary",
		"label": __( 'Glossary', 'jet-form-builder' ),
	} )
}

export { listFrom };