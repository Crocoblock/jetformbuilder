/* eslint-disable import/no-extraneous-dependencies */
import {
	fieldTypesList,
	maskPlaceholdersList,
	maskTypesList,
	maskVisibilitiesList,
} from './options';
import preview from './preview';
import { __ } from '@wordpress/i18n';
import {
	TextControl,
	SelectControl,
	ToggleControl,
	PanelBody,
	Notice
} from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { styled } from '@linaria/react';
import { useState, useEffect, RawHTML } from '@wordpress/element';

const {
	      ToolBarFields,
	      BlockName,
	      BlockLabel,
	      BlockDescription,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
	      BlockAdvancedValue,
	      EditAdvancedRulesButton,
	      BaseHelp,
	      AdvancedInspectorControl,
	      AttributeHelp,
      } = JetFBComponents;
const {
	      useIsAdvancedValidation,
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const FullWidthInput = styled.input`
    width: 100%;
    margin: unset;
`;

const { seenIcon, unSeenIcon } = JFBTextFieldConfig;

// eslint-disable-next-line max-lines-per-function
export default function TextEdit( props ) {
	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey, attrHelp },
	      } = props;

	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();

	useUniqueNameOnDuplicate();

	const [ showPassword, setShowPassword ] = useState( null );

	useEffect( () => setShowPassword( false ),
		[ attributes.field_type, attributes.showEye ] );

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
			<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
				<BlockAdvancedValue/>
			</PanelBody>
			<FieldSettingsWrapper { ...props }>
				<SelectControl
					key="field_type"
					label={ __( 'Field Type', 'jet-form-builder' ) }
					labelPosition="top"
					value={ attributes.field_type }
					onChange={ newValue => {
						setAttributes( { field_type: newValue } );
					} }
					options={ fieldTypesList }
				/>
				{ 'tel' === attributes.field_type && (
					<div
						style={ { marginBottom:'16px' } }
					>
						<Notice
							status="info"
							isDismissible={ false }
						>
							<div>
								{ __(
									'There is a dedicated Phone Field for entering the phone number in the form.',
									'jet-form-builder' )
								}
							</div>
						</Notice>
					</div>
				) }
				{ 'password' === attributes.field_type && <>
					<ToggleControl
						label={ __( 'Show eye icon', 'jet-form-builder' ) }
						checked={ attributes.showEye }
						help={ __(
							'Enable to allow user control visibility of value in input',
							'jet-form-builder',
						) }
						onChange={ showEye => setAttributes( { showEye } ) }
					/>
				</> }
				<SelectControl
					key="autocomplete"
					label={ __( 'Autocomplete', 'jet-form-builder' ) }
					labelPosition="top"
					value={ attributes.autocomplete || 'off' }
					onChange={ newValue => {
						setAttributes( { autocomplete: newValue } );
					} }
					options={ [
						{ label: __( 'Off', 'jet-form-builder' ), value: 'off' },
						{ label: __( 'On', 'jet-form-builder' ), value: 'on' },
					] }
				/>
				<AdvancedInspectorControl
					value={ attributes.minlength }
					label={ __( 'Min length (symbols)', 'jet-form-builder' ) }
					onChangePreset={ minlength => setAttributes(
						{ minlength } ) }
				>
					{ ( { instanceId } ) => (
						<TextControl
							id={ instanceId }
							className="jet-fb m-unset"
							value={ attributes.minlength }
							onChange={ minlength => setAttributes(
								{ minlength } ) }
						/>
					) }
				</AdvancedInspectorControl>
				<AttributeHelp name="minlength"/>
				<AdvancedInspectorControl
					value={ attributes.maxlength }
					label={ __( 'Max length (symbols)', 'jet-form-builder' ) }
					onChangePreset={ maxlength => setAttributes(
						{ maxlength } ) }
				>
					{ ( { instanceId } ) => <TextControl
						id={ instanceId }
						className="jet-fb m-unset"
						value={ attributes.maxlength }
						onChange={ maxlength => setAttributes( { maxlength } ) }
					/> }
				</AdvancedInspectorControl>
				<AttributeHelp name="maxlength"/>
				<ToggleControl
					key={ 'enable_input_mask' }
					label={ __( 'Set Input Mask', 'jet-form-builder' ) }
					checked={ attributes.enable_input_mask }
					help={ __(
						'Check this to setup specific input format for the current field',
						'jet-form-builder' ) }
					onChange={ newVal => {
						setAttributes( { enable_input_mask: newVal } );
					} }
				/>
				{ attributes.enable_input_mask && <React.Fragment>
					{ 'datetime' != attributes.mask_type && <ToggleControl
						label={ __(
							'Clear mask before submit',
							'jet-form-builder',
						) }
						checked={ attributes.clear_on_submit }
						onChange={ val => setAttributes(
							{ clear_on_submit: val },
						) }
					/> }
					<SelectControl
						key="mask_type"
						label={ __( 'Mask type', 'jet-form-builder' ) }
						labelPosition="top"
						value={ attributes.mask_type }
						onChange={ ( newValue ) => {
							setAttributes( { mask_type: newValue } );
						} }
						options={ maskTypesList }
					/>
					<TextControl
						key="input_mask"
						label={ __( 'Input mask', 'jet-form-builder' ) }
						value={ attributes.input_mask }
						onChange={ ( newValue ) => {
							setAttributes( { input_mask: newValue } );
						} }
					/>
					{ (
						!attributes.mask_type
					) && <BaseHelp style={ { marginBottom: '2em' } }>
						{ attrHelp( 'input_mask_default' ) }
					</BaseHelp> }

					{ 'datetime' === attributes.mask_type && (
						<BaseHelp style={ { marginBottom: '2em' } }>
							{ __( 'Examples:',
								'jet-form-builder' ) } dd/mm/yyyy,
							mm/dd/yyyy<br/>
							{ __( 'More info - ', 'jet-form-builder' ) }
							<a href={ attrHelp( 'input_mask_datetime_link' ) }
							   target="_blank" rel="noreferrer">{ __( 'here',
								'jet-form-builder' ) }</a>
						</BaseHelp>
					) }

					<SelectControl
						key="mask_visibility"
						label={ __( 'Mask visibility', 'jet-form-builder' ) }
						labelPosition="top"
						value={ attributes.mask_visibility }
						onChange={ ( newValue ) => {
							setAttributes( { mask_visibility: newValue } );
						} }
						options={ maskVisibilitiesList }
					/>
					<SelectControl
						key="mask_placeholder"
						label={ __( 'Mask placeholder', 'jet-form-builder' ) }
						labelPosition="top"
						value={ attributes.mask_placeholder }
						onChange={ ( newValue ) => {
							setAttributes( { mask_placeholder: newValue } );
						} }
						options={ maskPlaceholdersList }
					/>
				</React.Fragment> }
			</FieldSettingsWrapper>
			<PanelBody
				title={ __( 'Validation', 'jet-form-builder' ) }
			>
				<ValidationToggleGroup/>
				{ isAdvancedValidation && <>
					<EditAdvancedRulesButton/>
					{ 'email' === attributes.field_type && (
						<ValidationBlockMessage name="email"/>
					) }
					{ 'url' === attributes.field_type && (
						<ValidationBlockMessage name="url"/>
					) }
					{ attributes.enable_input_mask && (
						<ValidationBlockMessage name="inputmask"/>
					) }
					{ Boolean( attributes.minlength ) && <>
						<ValidationBlockMessage name="char_min"/>
					</> }
					{ Boolean( attributes.maxlength ) && <>
						<ValidationBlockMessage name="char_max"/>
					</> }
					<ValidationBlockMessage name="empty"/>
				</> }
			</PanelBody>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<div className={ [
					'jet-form-builder__field-wrap jet-form-builder__field-preview',
					attributes.showEye && 'has-eye-icon',
				].join( ' ' ) }>
					<FullWidthInput
						placeholder={ attributes.placeholder }
						minLength={ attributes.minlength }
						maxLength={ attributes.maxlength }
						type={ showPassword ? 'text' : attributes.field_type }
					/>
					{ (
						attributes.showEye && 'password' ===
						attributes.field_type
						// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
					) && <span
						className={ [
							'jfb-eye-icon',
							showPassword ? '' : 'seen',
						].join( ' ' ) }
						onClick={ () => setShowPassword( prev => !prev ) }
					>
						<RawHTML>{ seenIcon }</RawHTML>
						<RawHTML>{ unSeenIcon }</RawHTML>
					</span> }
				</div>
			</FieldWrapper>
		</div>,
	];
};
