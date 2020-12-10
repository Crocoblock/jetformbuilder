import Tools from "../../tools";

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

const localizeData = window.JetFormSelectFieldData;

class FromTermsFields extends wp.element.Component {

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
					key='from__terms'
					label='Taxonomy'
					labelPosition='top'
					value={ attributes.field_options_tax }
					onChange={ ( newValue ) => {
						parentProps.setAttributes( { field_options_tax: newValue } );
					} }
					options={ localizeData.taxonomies_list }
				/>
				<TextControl
					key='value_from_key'
					label='Value from meta field'
					value={ attributes.value_from_key }
					help={ Tools.getHelpMessage( localizeData, 'value_from_meta' ) }
					onChange={ ( newValue ) => {
						parentProps.setAttributes( { value_from_key: newValue } );
					} }
				/>
				<TextControl
					key='calculated_value_from_key'
					label='Calculated value from meta field'
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

export default FromTermsFields;