const {
	      ToolBarFields,
	      BlockName,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      AdvancedFields,
	      FieldWrapper,
      } = JetFBComponents;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const {
	      TextControl,
	      PanelBody,
	      __experimentalInputControl,
      } = wp.components;

let { InputControl } = wp.components;

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

export default function TimeEdit( props ) {
	const {
		      isSelected,
		      editProps: { uniqKey },
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
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
			<PanelBody title={ __( 'Value settings', 'jet-form-builder' ) }>
				<BlockAdvancedValue/>
			</PanelBody>
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
					key={ uniqKey( 'place_holder_block' ) }
					placeholder={ 'Input type="time"' }
				/>
			</FieldWrapper>
		</div>,
	];
}