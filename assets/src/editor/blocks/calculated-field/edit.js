const {
	      AdvancedFields,
	      GeneralFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      BaseHelp,
	      ToolBarFields,
      } = JetFBComponents;

const {
	      getFieldsWithoutCurrent,
      } = JetFBActions;

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
	      Button,
	      Popover,
	      SelectControl,
	      __experimentalNumberControl,
      } = wp.components;

const NumberControl = __experimentalNumberControl;

const { useState, RawHTML } = wp.element;
const { applyFilters }      = wp.hooks;

const help = {
	calc_hidden: __( 'Check this to hide calculated field' ),
};

export default function EditCalculated( props ) {
	const blockProps = useBlockProps();

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey },
	      } = props;

	const insertMacros  = ( macros ) => {
		setAttributes( {
			calc_formula: `${ attributes.calc_formula || '' }${ macros }`,
		} );
	};
	const togglePopover = () => {
		const fields = getFieldsWithoutCurrent().map( ( { value } ) => (
			'%FIELD::' + value + '%'
		) );

		setFormFields( applyFilters( 'jet.fb.calculated.field.available.fields',
			fields ) );
		setShowMacros( toggle => !toggle );
	};

	const [ formFields, setFormFields ] = useState( [] );
	const [ showMacros, setShowMacros ] = useState( false );

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		>
			<Button
				key={ uniqKey( 'show-popover' ) }
				isTertiary
				isSmall
				icon={ showMacros ? 'no-alt' : 'admin-tools' }
				onClick={ togglePopover }
			/>
			{ showMacros && <Popover
				key={ uniqKey( 'Popover' ) }
				placement={ 'bottom-end' }
			>
				{ formFields.length && <PanelBody title={ 'Form Fields' }>
					{ formFields.map( ( value, index ) => <div
							key={ uniqKey( `formFields-${ index }` ) }>
							<Button
								isLink
								onClick={ () => {
									insertMacros( value );
								} }
							>{ value }</Button>
						</div>,
					) }
				</PanelBody> }
			</Popover> }
		</ToolBarFields>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields/>
			<FieldSettingsWrapper { ...props }>
				<p
					className={ 'components-base-control__help' }
					style={ { marginTop: '0px', color: 'rgb(117, 117, 117)' } }
					dangerouslySetInnerHTML={ { __html: JetFormCalculatedField.field_desc } }
				/>
				<SelectControl
					label={ __( 'Value type', 'jet-form-builder' ) }
					labelPosition="top"
					value={ attributes.value_type }
					onChange={ value_type => setAttributes( { value_type } ) }
					options={ [
						{
							value: 'number',
							label: __( 'as Number', 'jet-form-builder' ),
						},
						{
							value: 'string',
							label: __( 'as String', 'jet-form-builder' ),
						},
					] }
				/>
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
						label={ __( 'Decimals separator' ) }
						value={ attributes.separate_decimals }
						onChange={ separate_decimals => setAttributes(
							{ separate_decimals } ) }
					/>
					<TextControl
						key="calc_separate_thousands"
						label={ __( 'Thousands separator' ) }
						value={ attributes.separate_thousands }
						onChange={ separate_thousands => setAttributes(
							{ separate_thousands } ) }
					/>
					<TextControl
						key="calc_prefix"
						label={ __( 'Calculated Value Prefix' ) }
						value={ attributes.calc_prefix }
						help={ __(
							'For space before or after text use: &nbsp;' ) }
						onChange={ ( newValue ) => {
							setAttributes( { calc_prefix: newValue } );
						} }
					/>
					<TextControl
						key="calc_suffix"
						label={ __( 'Calculated Value Suffix' ) }
						value={ attributes.calc_suffix }
						help={ __(
							'For space before or after text use: &nbsp;' ) }
						onChange={ ( newValue ) => {
							setAttributes( { calc_suffix: newValue } );
						} }
					/>
				</> : null }
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
					/>
				</> }
			</FieldWrapper>
		</div>,
	];
}