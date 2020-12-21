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

class FromGeneratorsFields extends wp.element.Component {

	constructor( props ) {
		super( props );
	}

	getHelpMessage( name = '' ) {
		const messages = window.JetFormSelectFieldData.help_messages;
		const func = this.props.attributes.generator_function;

		if ( typeof messages[ name ] !== 'undefined' ) {
			return messages[ name ];
		}

		if ( func && typeof messages[ func ] === 'object' ) {
			return messages[ func ][ name ];
		}
	}

	render() {
		const props = this.props;
		const attributes = props.attributes;
		const parentProps = props.parentProps;

		return (
			<div>
				<SelectControl
					key='generator_function'
					label='Generator Function'
					labelPosition='top'
					value={ attributes.generator_function }
					onChange={ ( newValue ) => {
						parentProps.setAttributes( { generator_function: newValue } );
					} }
					options={ window.JetFormSelectFieldData.generators_list }
				/>
				<TextControl
					key='generator_field'
					label='Field Name'
					value={ attributes.generator_field }
					help={ this.getHelpMessage( 'field_name' ) }
					onChange={ ( newValue ) => {
						parentProps.setAttributes( { generator_field: newValue } );
					} }
				/>
				<TextControl
					key='from_generator__value_from_meta'
					label='Value from meta field'
					help={ this.getHelpMessage( 'value_from_meta' ) }
					value={ attributes.from_generator__value_from_meta }
					onChange={ ( newValue ) => {
						parentProps.setAttributes( { from_generator__value_from_meta: newValue } );
					} }
				/>
				<TextControl
					key='calculated_value_from_key'
					label='Calculated value from meta field'
					help={ this.getHelpMessage( 'calculated_value_from_key' ) }
					value={ attributes.calculated_value_from_key }
					onChange={ ( newValue ) => {
						parentProps.setAttributes( { calculated_value_from_key: newValue } );
					} }
				/>
			</div>
		);
	}
}

export default FromGeneratorsFields;