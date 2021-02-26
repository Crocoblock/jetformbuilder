
import FromGeneratorsFields from "../../components/base-select-check-radio/from-generators-fields";
import FromManualFields from "../../components/base-select-check-radio/from-manual-fields";
import { SelectRadioCheckPlaceholder } from "../../components/select-radio-check-placeholder";
import { AdvancedFields, GeneralFields, ToolBarFields } from "../controls/field-control";
import { listFrom } from "../select-radio-chekc-options";
import FromPostTermsFields from "../../components/base-select-check-radio/from-post-terms-fields";


const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	TextControl,
	SelectControl,
} = wp.components;

const localized = window.JetFormCheckboxFieldData;

export default function CheckboxEdit( props ) {

	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey }
	} = props;

	const { field_options_from } = attributes;

	return [
		<ToolBarFields
			key={ uniqKey( 'JetForm-toolbar' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'JetForm-general' ) }
				{ ...props }
			/>
			<AdvancedFields
				key={ uniqKey( 'JetForm-advanced' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			{ isSelected && <div className='inside-block-options'>
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
					attributes={ attributes }
					parentProps={ props }
				/> }
				{ ['posts', 'terms'].includes( field_options_from ) && <FromPostTermsFields
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
					attributes={ attributes }
					parentProps={ props }
					localizeData={ localized }
				/> }
			</div> }
			<SelectRadioCheckPlaceholder
				key={ uniqKey( 'SelectRadioCheckPlaceholder' ) }
				scriptData={ localized }
				{ ...props }
			/>
		</div>
	];
}