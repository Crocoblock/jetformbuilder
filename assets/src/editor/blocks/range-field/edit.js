import preview from './preview';

const {
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      BlockName,
	      AdvancedFields,
	      FieldWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
      } = JetFBComponents;
const {
	      useIsAdvancedValidation,
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;
const {
	      __,
      } = wp.i18n;
const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;
const {
	      TextControl,
	      PanelBody,
	      __experimentalNumberControl,
	      __experimentalInputControl,
      } = wp.components;
const {
	      useState,
      } = wp.element;

let { NumberControl, InputControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

export default function RangeEdit( props ) {

	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();

	useUniqueNameOnDuplicate();

	const [ rangeValue, setRangeValue ] = useState( 50 );

	const {
		      attributes,
		      setAttributes,
		      editProps: { uniqKey, attrHelp },
	      } = props;

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
		props.isSelected && (
			<InspectorControls
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
				<PanelBody
					title={ __( 'Field', 'jet-form-builder' ) }
					key={ uniqKey( 'PanelBody' ) }
				>
					<NumberControl
						label={ __( 'Min Value' ) }
						labelPosition="top"
						key="min"
						value={ attributes.min }
						onChange={ ( newValue ) => {
							setAttributes( { min: parseFloat( newValue ) } );
						} }
					/>
					<NumberControl
						label={ __( 'Max Value' ) }
						labelPosition="top"
						key="max"
						value={ attributes.max }
						onChange={ ( newValue ) => {
							setAttributes( { max: parseFloat( newValue ) } );
						} }
					/>
					<NumberControl
						label={ __( 'Step' ) }
						labelPosition="top"
						key="step"
						value={ attributes.step }
						onChange={ ( newValue ) => {
							setAttributes( { step: parseFloat( newValue ) } );
						} }
					/>
					<TextControl
						key="prefix"
						label={ __( 'Value prefix' ) }
						value={ attributes.prefix }
						help={ attrHelp( 'prefix_suffix' ) }
						onChange={ ( newValue ) => {
							setAttributes( { prefix: newValue } );
						} }
					/>
					<TextControl
						key="suffix"
						label={ __( 'Value suffix' ) }
						value={ attributes.suffix }
						help={ attrHelp( 'prefix_suffix' ) }
						onChange={ ( newValue ) => {
							setAttributes( { suffix: newValue } );
						} }
					/>

				</PanelBody>
				<PanelBody
					title={ __( 'Validation', 'jet-form-builder' ) }
				>
					<ValidationToggleGroup/>
					{ isAdvancedValidation && <>
						<ValidationBlockMessage name="empty"/>
						<ValidationBlockMessage name="number_max"/>
						<ValidationBlockMessage name="number_min"/>
					</> }
				</PanelBody>
				<AdvancedFields
					key={ uniqKey( 'AdvancedFields' ) }
					{ ...props }
				/>
			</InspectorControls>
		),
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				wrapClasses={ [
					'range-wrap',
				] }
				{ ...props }
			>
				<div className="range-flex-wrap">
					<InputControl
						key={ uniqKey( 'placeholder_block' ) }
						type={ 'range' }
						min={ attributes.min || 0 }
						max={ attributes.max || 100 }
						step={ attributes.step || 1 }
						onChange={ setRangeValue }
					/>
					<div className={ 'jet-form-builder__field-value' }>
						<span
							className={ 'jet-form-builder__field-value-prefix' }>{ attributes.prefix }</span>
						<span>{ rangeValue }</span>
						<span
							className={ 'jet-form-builder__field-value-suffix' }>{ attributes.suffix }</span>
					</div>
				</div>
			</FieldWrapper>
		</div>,
	];
}