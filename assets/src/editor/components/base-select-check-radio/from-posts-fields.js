import Tools from "../../helpers/tools";

const {
	PanelColor,
	IconButton,
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	PanelBody,
	Button,
	RangeControl,
	CheckboxControl,
	Disabled,
} = wp.components;

const { __ } = wp.i18n;

const localizeData = window.JetFormSelectFieldData;

class FromPostsFields extends wp.element.Component {

	constructor( props ) {
		super( props );
	}

	render() {
		const props = this.props;
		const attributes = props.attributes;
		const parentProps = props.parentProps;

		return (
			<div>
				<SelectControl
					key='from__posts'
					label={ __( 'Post Type' ) }
					labelPosition='top'
					value={ attributes.field_options_post_type }
					onChange={ ( newValue ) => {
						parentProps.setAttributes( { field_options_post_type: newValue } );
					} }
					options={ localizeData.post_types_list }
				/>
				<TextControl
					key='value_from_key'
					label={ __( 'Value from meta field' ) }
					value={ attributes.value_from_key }
					help={ Tools.getHelpMessage( localizeData, 'value_from_meta' ) }
					onChange={ ( newValue ) => {
						parentProps.setAttributes( { value_from_key: newValue } );
					} }
				/>
				<TextControl
					key='calculated_value_from_key'
					label={ __( 'Calculated value from meta field' ) }
					value={ attributes.calculated_value_from_key }
					help={ Tools.getHelpMessage( localizeData, 'calc_value_from_meta' ) }
					onChange={ ( newValue ) => {
						parentProps.setAttributes( { calculated_value_from_key: newValue } );
					} }
				/>
			</div>
		);
	}
}

export default FromPostsFields;