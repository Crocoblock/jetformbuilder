const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;

const ControlsSettings = () => applyFilters( 'jet.fb.register.fields.controls', {
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

export default ControlsSettings;