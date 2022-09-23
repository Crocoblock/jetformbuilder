import AdvancedInspectorControl
	from '../../../package/components/AdvancedInspectorControl';

const {
	      ToolBarFields,
	      BlockLabel,
	      BlockName,
	      BlockDescription,
	      BlockAdvancedValue,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
      } = JetFBComponents;
const {
	      __,
      } = wp.i18n;
const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;
const {
	      TextControl,
	      ToggleControl,
	      PanelBody,
	      __experimentalInputControl,
      } = wp.components;

let { InputControl } = wp.components;

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

export default function DateEdit( props ) {
	const blockProps = useBlockProps();

	const {
		      attributes,
		      isSelected,
		      setAttributes,
		      editProps: { uniqKey, blockName, attrHelp },
	      } = props;

	return [
		<ToolBarFields
			key={ uniqKey( 'JetForm-toolbar' ) }
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
			<PanelBody title={ __( 'Value settings', 'jet-form-builder' ) }>
				<BlockAdvancedValue
					help={ __(
						'Plain date should be in yyyy-mm-dd format',
						'jet-form-builder',
					) }
				/>
				<AdvancedInspectorControl
					value={ attributes.min }
					label={ __( 'Starting from date', 'jet-form-builder' ) }
					onChangePreset={ min => setAttributes( { min } ) }
					onChangeMacros={ name => setAttributes( {
						min: attributes.min + `%${ name }%`,
					} ) }
				>
					{ ( { instanceId } ) => <TextControl
						id={ instanceId }
						value={ attributes.min }
						help={ __(
							'Plain date should be in yyyy-mm-dd format',
							'jet-form-builder',
						) }
						onChange={ min => setAttributes( { min } ) }
					/> }
				</AdvancedInspectorControl>
			</PanelBody>
			<FieldSettingsWrapper { ...props }>
				<ToggleControl
					key="is_timestamp"
					label={ __( 'Is Timestamp' ) }
					checked={ attributes.is_timestamp }
					help={ attrHelp( 'is_timestamp' ) }
					onChange={ ( newValue ) => {
						setAttributes( { is_timestamp: Boolean( newValue ) } );
					} }
				/>
			</FieldSettingsWrapper>
			<AdvancedFields/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<TextControl
					onChange={ () => {
					} }
					key={ `place_holder_block_${ blockName }` }
					placeholder={ 'Input type="date"' }
				/>
			</FieldWrapper>
		</div>,
	];
}