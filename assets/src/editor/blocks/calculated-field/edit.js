import preview from './preview';
import { useRef } from 'react';

const {
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      ToolBarFields,
	      BlockName,
	      BlockDescription,
	      BlockLabel,
	      MacrosFields,
	      ClientSideMacros,
      } = JetFBComponents;
const {
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const {
	      TextControl,
	      TextareaControl,
	      ToggleControl,
	      PanelBody,
	      SelectControl,
	      __experimentalNumberControl,
      } = wp.components;

const NumberControl = __experimentalNumberControl;

const help = {
	calc_hidden: __( 'Check this to hide calculated field',
		'jet-form-builder' ),
};

// eslint-disable-next-line max-lines-per-function
export default function EditCalculated( props ) {
	const blockProps = useBlockProps();
	useUniqueNameOnDuplicate();

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey },
	      } = props;

	const textareaRef = useRef( null );

	const insertMacros = ( macros ) => {

		const currentValue = attributes.calc_formula || '';

		const textarea = textareaRef.current;

		if ( textarea ) {
			const start    = textarea.selectionStart;
			const end      = textarea.selectionEnd;
			const newValue = currentValue.slice( 0, start ) + macros + currentValue.slice( end );

			setAttributes( { calc_formula: newValue } );

			setTimeout( () => {
				textarea.focus();
				textarea.selectionStart = textarea.selectionEnd = start + macros.length;
			} );
		}
	};

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
		>
			<ClientSideMacros withThis>
				<MacrosFields
					onClick={ insertMacros }
				/>
			</ClientSideMacros>
		</ToolBarFields>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }
			           key={ 'jet-form-general-fields' }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
			<FieldSettingsWrapper { ...props }>
				{ 'date' !== attributes.value_type ? <>
					<p
						className={ 'components-base-control__help' }
						style={ { marginTop: '0px', color: 'rgb(117, 117, 117)' } }
						dangerouslySetInnerHTML={ { __html: JetFormCalculatedField.field_desc } }
					/>
				</> : null }
				<SelectControl
					label={ __( 'Value type', 'jet-form-builder' ) }
					labelPosition="top"
					value={ attributes.value_type }
					onChange={ val => setAttributes( { value_type: val } ) }
					options={ [
						{
							value: 'number',
							label: __( 'as Number', 'jet-form-builder' ),
						},
						{
							value: 'string',
							label: __( 'as String', 'jet-form-builder' ),
						},
						{
							value: 'date',
							label: __( 'as Date', 'jet-form-builder' ),
						}
					] }
				/>
				{ 'date' === attributes.value_type ? <>
					<TextControl
						key="calc_date_format"
						label={ __( 'Date Format', 'jet-form-builder' ) }
						value={ attributes.date_format }
						onChange={ val => setAttributes(
							{ date_format: val },
						) }
					/>
					<p
					className={ 'components-base-control__help' }
					style={ { marginTop: '0px', color: 'rgb(117, 117, 117)' } }
						dangerouslySetInnerHTML={ { __html: JetFormCalculatedField.date_format } }
					/>
				</> : null }
				{ 'number' === attributes.value_type ? <>
					<NumberControl
						label={ __( 'Decimal Places Number',
							'jet-form-builder' ) }
						labelPosition="top"
						key="precision"
						value={ attributes.precision }
						onChange={ ( newValue ) => {
							setAttributes(
								{ precision: parseInt( newValue ) } );
						} }
					/>
					<TextControl
						key="calc_separate_decimals"
						label={ __( 'Decimals separator', 'jet-form-builder' ) }
						value={ attributes.separate_decimals }
						onChange={ val => setAttributes(
							{ separate_decimals: val },
						) }
					/>
					<TextControl
						key="calc_separate_thousands"
						label={ __( 'Thousands separator',
							'jet-form-builder' ) }
						value={ attributes.separate_thousands }
						onChange={ val => setAttributes(
							{ separate_thousands: val },
						) }
					/>
					<TextControl
						key="calc_prefix"
						label={ __( 'Calculated Value Prefix',
							'jet-form-builder' ) }
						value={ attributes.calc_prefix }
						help={ __(
							'For space before or after text use: &nbsp;',
							'jet-form-builder' ) }
						onChange={ ( newValue ) => {
							setAttributes( { calc_prefix: newValue } );
						} }
					/>
					<TextControl
						key="calc_suffix"
						label={ __( 'Calculated Value Suffix',
							'jet-form-builder' ) }
						value={ attributes.calc_suffix }
						help={ __(
							'For space before or after text use: &nbsp;',
							'jet-form-builder' ) }
						onChange={ ( newValue ) => {
							setAttributes( { calc_suffix: newValue } );
						} }
					/>
				</> : null }
				<ToggleControl
					key={ 'calc_hidden' }
					label={ __( 'Hidden', 'jet-form-builder' ) }
					checked={ attributes.calc_hidden }
					help={ help.calc_hidden }
					onChange={ newVal => {
						setAttributes( {
							calc_hidden: Boolean( newVal ),
						} );
					} }
				/>
			</FieldSettingsWrapper>
			<AdvancedFields
				key={ uniqKey( 'JetForm-advanced' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<div className={ 'jet-form-builder__calculated-field' }>
					<div
						className={ 'calc-prefix' }>{ attributes.calc_prefix }</div>
					<div
						className={ 'calc-formula' }>{ attributes.calc_formula }</div>
					<div
						className={ 'calc-suffix' }>{ attributes.calc_suffix }</div>
				</div>
				{ props.isSelected && <>
					<TextareaControl
						key="calc_formula"
						value={ attributes.calc_formula }
						onChange={ ( newValue ) => {
							setAttributes( { calc_formula: newValue } );
						} }
						ref={ textareaRef }
					/>
				</> }
			</FieldWrapper>
		</div>,
	];
}