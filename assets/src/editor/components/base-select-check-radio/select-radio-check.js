import { listFrom } from "../../blocks/select-radio-chekc-options";
import FromManualFields from "./from-manual-fields";
import FromPostTermsFields from "./from-post-terms-fields";
import FromGeneratorsFields from "./from-generators-fields";

const {
	TextControl,
	SelectControl,
} = wp.components;

function SelectRadioCheck( props ) {

	const {
		attributes,
		setAttributes,
		isSelected,
		children = []
	} = props;

	const { field_options_from } = attributes;

	return isSelected && <div className='inside-block-options'>
		<SelectControl
			key='field_options_from'
			label='Fill Options From'
			labelPosition='top'
			value={ field_options_from }
			onChange={ ( newValue ) => {
				setAttributes( { field_options_from: newValue } );
			} }
			options={ listFrom }
		/>
		{ 'manual_input' === field_options_from && <FromManualFields
			key='from_manual'
			{ ...props }
		/> }
		{ [ 'posts', 'terms' ].includes( field_options_from ) && <FromPostTermsFields
			key='form_posts_terms'
			{ ...props }
		/> }
		{ 'meta_field' === field_options_from && <TextControl
			key='field_options_key'
			label='Meta field to get value from'
			value={ attributes.field_options_key }
			onChange={ ( newValue ) => {
				setAttributes( { field_options_key: newValue } );
			} }
		/> }
		{ 'generate' === field_options_from && <FromGeneratorsFields
			key='form_generators'
			{ ...props }
		/> }
		{ children }
	</div>;
}

export default SelectRadioCheck;