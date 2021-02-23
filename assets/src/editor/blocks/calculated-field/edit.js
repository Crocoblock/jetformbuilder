import FieldWrapper from "../../components/field-wrapper";
import { AdvancedFields, GeneralFields } from "../controls/field-control";
import { getFieldsWithoutCurrent, getFormFieldsBlocks } from "../../helpers/blocks-helper";

const block = 'jet-forms/calculated-field';

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
	Popover,
	RangeControl,
	CheckboxControl,
	Disabled,
	ToolbarGroup,
	ToolbarItem,
	__experimentalNumberControl,
} = wp.components;

const NumberControl = __experimentalNumberControl;

const { useState, useEffect } = wp.element;

const help = {
	calc_hidden: __( 'Check this to hide calculated field' )
};

export default function EditCalculated( props ) {
	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey }
	} = props;

	const insertMacros = ( macros ) => {
		setAttributes( {
			calc_formula: `${ attributes.calc_formula || '' }%FIELD::${ macros }%`
		} );
	};
	const togglePopover = () => {
		setFormFields( getFieldsWithoutCurrent() );
		setShowMacros( toggle => ! toggle );
	};

	const [ formFields, setFormFields ] = useState( [] );
	const [ showMacros, setShowMacros ] = useState( false );

	return [
		<BlockControls key={ uniqKey( 'BlockControls' ) }>
			<ToolbarGroup key={ uniqKey( 'ToolbarGroup' ) }>
				<Button
					key={ uniqKey( 'show-popover' ) }
					isTertiary
					isSmall
					icon={ showMacros ? 'no-alt' : 'admin-tools' }
					onClick={ togglePopover }
				/>
				{ showMacros && <Popover
					key={ uniqKey( 'Popover' ) }
					position={ 'bottom left' }
				>
					{ formFields.length && <PanelBody title={ 'Form Fields' }>
						{ formFields.map( ( { value }, index ) => <div key={ uniqKey( `formFields-${ index }` ) }>
								<Button
									isLink
									onClick={ () => {
										insertMacros( value )
									} }
								>{ '%FIELD::' + value + '%' }</Button>
							</div>
						) }
					</PanelBody> }
				</Popover> }
			</ToolbarGroup>
		</BlockControls>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'JetForm-general' ) }
				{ ...props }
			/>
			<PanelBody
				title={ __( 'Field Settings' ) }
			>
				<div className="jet-form-editor__row-notice">
					{ __( 'Set math formula to calculate field value.', 'jet-form-builder' ) }<br/>
					{ __( 'For example:', 'jet-form-builder' ) }<br/><br/>
					%FIELD::quantity%*%META::price%<br/><br/>
					{ __( 'Where:', 'jet-form-builder' ) }<br/>
					-
					{ __( '%FIELD::quantity% - macros for form field value. "quantity" - is a field name to get value from', 'jet-form-builder' ) }<br/>
					-
					{ __( '%META::price% - macros for current post meta value. "price" - is a meta key to get value from', 'jet-form-builder' ) }<br/><br/>
				</div>

				<NumberControl
					label={ __( 'Decimal Places Number' ) }
					labelPosition='top'
					key='precision'
					value={ attributes.precision }
					onChange={ ( newValue ) => {
						setAttributes( { precision: parseInt( newValue ) } );
					} }
				/>
				<TextControl
					key='calc_prefix'
					label={ __( 'Calculated Value Prefix' ) }
					value={ attributes.calc_prefix }
					help={ __( 'For space before or after text use: &nbsp;' ) }
					onChange={ ( newValue ) => {
						setAttributes( { calc_prefix: newValue } );
					} }
				/>
				<TextControl
					key='calc_suffix'
					label={ __( 'Calculated Value Suffix' ) }
					value={ attributes.calc_suffix }
					help={ __( 'For space before or after text use: &nbsp;' ) }
					onChange={ ( newValue ) => {
						setAttributes( { calc_suffix: newValue } );
					} }
				/>
				<ToggleControl
					key={ 'calc_hidden' }
					label={ __( 'Hidden' ) }
					checked={ attributes.calc_hidden }
					help={ help.calc_hidden }
					onChange={ newVal => {
						setAttributes( {
							calc_hidden: Boolean( newVal ),
						} );
					} }
				/>

			</PanelBody>
			<AdvancedFields
				key={ uniqKey( 'JetForm-advanced' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				valueIfEmptyLabel={ 'Calculated Field' }
				{ ...props }
			>
				{ props.isSelected && <TextareaControl
					key="calc_formula"
					value={ attributes.calc_formula }
					onChange={ ( newValue ) => {
						setAttributes( { calc_formula: newValue } );
					} }
				/> }
				<div className={ 'jet-form-builder__calculated-field' }>
					<div className={ 'calc-prefix' }>{ attributes.calc_prefix }</div>
					<div className={ 'calc-formula' }>{ attributes.calc_formula }</div>
					<div className={ 'calc-suffix' }>{ attributes.calc_suffix }</div>
				</div>
			</FieldWrapper>
		</div>
	];
}