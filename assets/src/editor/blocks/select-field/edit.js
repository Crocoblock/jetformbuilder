import { SelectRadioCheckPlaceholder } from '../../components/base-select-check-radio/select-radio-check-placeholder';
import SelectRadioCheck from '../../components/base-select-check-radio/select-radio-check';

const { __ } = wp.i18n;

const {
	ToolBarFields,
	GeneralFields,
	FieldControl,
} = JetFBComponents;

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	ToggleControl,
	SelectControl,
	PanelBody,
	TextControl,
	RangeControl,
} = wp.components;

/**
 * @param props
 * @returns {JSX.Element[]}
 * @constructor
 */
export default function SelectEdit( props ) {

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey, attrHelp },
	} = props;

	const blockProps = useBlockProps();

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
			/>
			<PanelBody
				title={ __( 'Advanced', 'jet-form-builder' ) }
			>
				<TextControl
					key={ uniqKey( 'placeholder' ) }
					label={ __( "Placeholder", 'jet-form-builder' ) }
					value={ attributes.placeholder }
					onChange={ placeholder => setAttributes( { placeholder } ) }
				/>
				{ ( !!attributes.placeholder.length ) && <ToggleControl
					key={ uniqKey( 'is_disabled_placeholder' ) }
					label={ __( 'Disable placeholder', 'jet-form-builder' ) }
					checked={ attributes.is_disabled_placeholder }
					onChange={ is_disabled_placeholder => setAttributes( { is_disabled_placeholder } ) }
				/> }
				<ToggleControl
					key={ uniqKey( 'add_prev' ) }
					label={ __( 'Add Prev Page Button', 'jet-form-builder' ) }
					checked={ attributes.add_prev }
					help={ attrHelp( 'add_prev' ) }
					onChange={ add_prev => setAttributes( { add_prev } ) }
				/>
				{ attributes.add_prev && <TextControl
					label={ __( 'Prev Page Button Label', 'jet-form-builder' ) }
					value={ attributes.prev_label }
					onChange={ prev_label => setAttributes( { prev_label } ) }
				/> }
				<SelectControl
					key={ uniqKey( 'SelectControl-type' ) }
					label={ __( "Field Visibility", 'jet-form-builder' ) }
					value={ attributes.visibility }
					options={ [
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
					] }
					onChange={ visibility => setAttributes( { visibility } ) }
				/>
				<TextControl
					label={ __( 'CSS Class Name', 'jet-form-builder' ) }
					value={ attributes.class_name }
					onChange={ class_name => setAttributes( { class_name } ) }
				/>
			</PanelBody>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<SelectRadioCheckPlaceholder
				scriptData={ window.JetFormSelectFieldData }
				{ ...props }
			/>
			<SelectRadioCheck { ...props }>
				<ToggleControl
					key='switch_on_change'
					label={ __( 'Switch page on change' ) }
					checked={ attributes.switch_on_change }
					help={ attrHelp( 'switch_on_change' ) }
					onChange={ ( newValue ) => {
						setAttributes( { switch_on_change: Boolean( newValue ) } );
					} }
				/>
				<ToggleControl
					key='multiple'
					label={ __( 'Is multiple', 'jet-form-builder' ) }
					checked={ attributes.multiple }
					help={ attrHelp( 'multiple' ) }
					onChange={ multiple => setAttributes( { multiple } ) }
				/>
				{ attributes.multiple && <RangeControl
					label={ __( 'Rows count', 'jet-form-builder' ) }
					value={ attributes.multiple_size ?? 4 }
					onChange={ multiple_size => setAttributes( { multiple_size } ) }
					allowReset
					resetFallbackValue={ 4 }
					min={ 1 }
					max={ 25 }
				/> }
				<FieldControl
					type='custom_settings'
					key={ uniqKey( 'customSettingsFields' ) }
					{ ...props }
				/>
			</SelectRadioCheck>
		</div>
	];
}