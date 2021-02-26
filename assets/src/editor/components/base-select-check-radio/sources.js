const { __ } = wp.i18n;
const localizeData = window.JetFormSelectFieldData;


const {
	SelectControl,
} = wp.components;

const sources = {
	terms: {
		label: __( 'Taxonomy' ),
		attr: 'field_options_tax',
		options: localizeData.taxonomies_list
	},
	posts: {
		label: __( 'Post Type' ),
		attr: 'field_options_post_type',
		options: localizeData.post_types_list
	}
};

const getSelectSource = ( props ) => {
	const { attributes, setAttributes } = props;
	const { field_options_from } = attributes;

	if ( ! sources[ field_options_from ] && ! sources[ field_options_from ] ) {
		return null;
	}
	const source = sources[ field_options_from ];

	return <SelectControl
		label={ source.label }
		labelPosition='top'
		value={ attributes[ source.attr ] }
		onChange={ newValue => {
			setAttributes( { [ source.attr ]: newValue } );
		} }
		options={ source.options }
	/>
};

export { getSelectSource };