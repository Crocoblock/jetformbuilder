import { listFrom } from "../../blocks/select-radio-chekc-options";
import FromManualFields from "./from-manual-fields";
import FromPostTermsFields from "./from-post-terms-fields";
import FromGeneratorsFields from "./from-generators-fields";

const {
		  TextControl,
		  SelectControl,
	  } = wp.components;

const { jetEngineVersion } = window.JetFormEditorData;
const { versionCompare } = JetFBActions;
const { applyFilters } = wp.hooks;

const canRenderGlossaries = "" !== jetEngineVersion;

function getFieldOptionsForm( optionsFrom, props ) {
	const {
			  attributes,
			  setAttributes,
		  } = props;

	switch ( optionsFrom ) {
		case 'manual_input':
			return <FromManualFields
				key='from_manual'
				{ ...props }
			/>;
		case 'posts':
		case 'terms':
			return <FromPostTermsFields
				key='form_posts_terms'
				{ ...props }
			/>;
		case 'meta_field':
			return <TextControl
				key='field_options_key'
				label='Meta field to get value from'
				value={ attributes.field_options_key }
				onChange={ ( newValue ) => {
					setAttributes( { field_options_key: newValue } );
				} }
			/>;
		case 'generate':
			return <FromGeneratorsFields
				key='form_generators'
				{ ...props }
			/>;
		case 'glossary':
			return canRenderGlossaries && <SelectControl
				key='select_glossary'
				label='Select Glossary'
				labelPosition='top'
				value={ attributes.glossary_id }
				onChange={ glossary_id => setAttributes( { glossary_id } ) }
				options={ [
					{ value: '', label: '--' },
					...window.JetFormSelectFieldData.glossaries_list,
				] }
			/>;
		default:
			return applyFilters( 'jet.fb.select.radio.check.controls', null, optionsFrom, props );

	}
}

function SelectRadioCheck( props ) {

	const {
			  attributes,
			  setAttributes,
			  isSelected,
			  children = [],
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
		{ getFieldOptionsForm( field_options_from, props ) }
		{ children }
	</div>;
}

export default SelectRadioCheck;