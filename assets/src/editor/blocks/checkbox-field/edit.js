import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';

import FromTermsFields from "../../components/base-select-check-radio/from-terms-fields";
import FromPostsFields from "../../components/base-select-check-radio/from-posts-fields";
import FromGeneratorsFields from "../../components/base-select-check-radio/from-generators-fields";
import FromManualFields from "../../components/base-select-check-radio/from-manual-fields";
import { SelectRadioCheckPlaceholder } from "../../components/select-radio-check-placeholder";
import { AdvancedFields, GeneralFields, ToolBarFields } from "../controls/field-control";


const { __ } = wp.i18n;

const {
	ColorPalette,
	RichText,
	Editable,
	MediaUpload,
	ServerSideRender,
	BlockControls,
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

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


export default function CheckboxEdit( props ) {

	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { blockName, uniqKey }
	} = props;

	const localized = window.JetFormCheckboxFieldData;

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
				attributes={ attributes }
				onChange={ setAttributes }
			/>
			<AdvancedFields
				key={ uniqKey( 'JetForm-advanced' ) }
				attributes={ attributes }
				onChange={ setAttributes }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			{ isSelected && <div className='inside-block-options'>
				<SelectControl
					key='field_options_from'
					label='Fill Options From'
					labelPosition='top'
					value={ attributes.field_options_from }
					onChange={ ( newValue ) => {
						props.setAttributes( { field_options_from: newValue } );
					} }
					options={ localized.options_from }
				/>
				{ 'manual_input' === attributes.field_options_from && <FromManualFields
					key='from_manual'
					attributes={ attributes }
					parentProps={ props }
				/> }
				{ 'posts' === attributes.field_options_from && <FromPostsFields
					key='form_posts'
					attributes={ attributes }
					parentProps={ props }
					localizeData={ localized }
				/> }
				{ 'terms' === attributes.field_options_from && <FromTermsFields
					key='form_terms'
					attributes={ attributes }
					parentProps={ props }
					localizeData={ localized }
				/> }

				{ 'meta_field' === attributes.field_options_from && <TextControl
					key='field_options_key'
					label='Meta field to get value from'
					value={ attributes.field_options_key }
					onChange={ ( newValue ) => {
						props.setAttributes( { field_options_key: newValue } );
					} }
				/> }

				{ 'generate' === attributes.field_options_from && <FromGeneratorsFields
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