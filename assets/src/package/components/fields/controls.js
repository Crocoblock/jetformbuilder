const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;

export const ControlsSettings = () => applyFilters( 'jet.fb.register.fields.controls', {
	"general":  {
		label: __( 'General' ),
		attrs: [
			{
				"attrName": "label",
				"type":     "text",
				"label":    __( "Field Label" ),
			},
			{
				"attrName": "name",
				"type":     "text",
				"label":    __( "Form field name" ),
				"help":     __( "Should contain only Latin letters, numbers, `-` or `_` chars, no spaces only lower case" ),
			},
			{
				"attrName": "desc",
				"type":     "text",
				"label":    __( "Field Description" ),
			},
			{
				"attrName": "default",
				"type":     "dynamic_text",
				"label":    __( "Default Value" ),
			},
		],
	},
	"toolbar":  {
		attrs: [
			{
				"attrName": "required",
				"type":     "toggle",
				"label":    __( "Is Required" ),
			},
		],
	},
	"advanced": {
		label: __( 'Advanced' ),
		attrs: [
			{
				"attrName": "placeholder",
				"type":     "text",
				"label":    __( "Placeholder" ),
			},
			{
				"attrName": "add_prev",
				"type":     "toggle",
				"label":    __( "Add Prev Page Button" ),
			},
			{
				"attrName":  "prev_label",
				"type":      "text",
				"label":     __( "Prev Page Button Label" ),
				"condition": "add_prev",
			},
			{
				"attrName": "visibility",
				"label":    __( "Field Visibility" ),
				"type":     "select",
				"options":  [
					{
						"value": "all",
						"label": __( "For all" ),
					},
					{
						"value": "logged_id",
						"label": __( "Only for logged in users" ),
					},
					{
						"value": "not_logged_in",
						"label": __( "Only for NOT-logged in users" ),
					},
				],
			},
			{
				"attrName": "class_name",
				"type":     "text",
				"label":    __( "CSS Class Name" ),
			},
		],
	},
} )