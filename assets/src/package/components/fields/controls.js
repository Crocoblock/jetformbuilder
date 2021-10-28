const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;

export const ControlsSettings = () => applyFilters( 'jet.fb.register.fields.controls', {
	"general": {
		label: __( 'General', 'jet-form-builder' ),
		attrs: [
			{
				"attrName": "label",
				"type": "text",
				"label": __( "Field Label", 'jet-form-builder' ),
			},
			{
				"attrName": "name",
				"type": "text",
				"label": __( "Form field name", 'jet-form-builder' ),
				"help": __( "Should contain only Latin letters, numbers, `-` or `_` chars, no spaces only lower case", 'jet-form-builder' ),
			},
			{
				"attrName": "desc",
				"type": "text",
				"label": __( "Field Description", 'jet-form-builder' ),
			},
			{
				"attrName": "default",
				"type": "dynamic_text",
				"label": __( "Default Value", 'jet-form-builder' ),
			},
		],
	},
	"toolbar": {
		attrs: [
			{
				"attrName": "required",
				"type": "toggle",
				"label": __( "Is Required", 'jet-form-builder' ),
			},
		],
	},
	"advanced": {
		label: __( 'Advanced', 'jet-form-builder' ),
		attrs: [
			{
				"attrName": "placeholder",
				"type": "text",
				"label": __( "Placeholder", 'jet-form-builder' ),
			},
			{
				"attrName": "add_prev",
				"type": "toggle",
				"label": __( "Add Prev Page Button", 'jet-form-builder' ),
				help: __( `It is recommended to use 
				the "Action Button" block with the "Go to Prev Page" type`, 'jet-from-builder' ),
			},
			{
				"attrName": "prev_label",
				"type": "text",
				"label": __( "Prev Page Button Label", 'jet-form-builder' ),
				"condition": "add_prev",
			},
			{
				"attrName": "visibility",
				"label": __( "Field Visibility", 'jet-form-builder' ),
				"type": "select",
				"options": [
					{
						"value": "all",
						"label": __( "For all", 'jet-form-builder' ),
					},
					{
						"value": "logged_id",
						"label": __( "Only for logged in users", 'jet-form-builder' ),
					},
					{
						"value": "not_logged_in",
						"label": __( "Only for NOT-logged in users", 'jet-form-builder' ),
					},
				],
			},
			{
				"attrName": "class_name",
				"type": "text",
				"label": __( "CSS Class Name", 'jet-form-builder' ),
			},
		],
	},
} )

export function getBlockControls( type = 'all' ) {
	if ( ! type ) {
		return false;
	}
	const controls = ControlsSettings();

	if ( 'all' === type ) {
		return controls;
	}

	if ( controls[ type ]
		&& controls[ type ].attrs
		&& Array.isArray( controls[ type ].attrs )
		&& 0 < controls[ type ].attrs.length
	) {
		return controls[ type ].attrs;
	}

	return false;
}