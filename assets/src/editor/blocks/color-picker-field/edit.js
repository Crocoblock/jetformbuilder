const {
		  AdvancedFields,
		  GeneralFields,
		  ToolBarFields,
		  FieldWrapper,
		  FieldSettingsWrapper,
	  } = JetFBComponents;

const {
		  TextControl,
		  __experimentalInputControl,
	  } = wp.components;

const { __ } = wp.i18n;


const {
		  InspectorControls,
		  useBlockProps,
	  } = wp.blockEditor;

let { InputControl } = wp.components;

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

function ColorPickerEdit( props ) {
	const blockProps = useBlockProps();

	const {
			  attributes,
			  setAttributes,
			  isSelected,
			  editProps: { uniqKey },
		  } = props;

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
			<FieldSettingsWrapper
				key={ uniqKey( 'FieldSettingsWrapper' ) }
				{ ...props }
			/>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<InputControl
					className='jet-form-builder__field-wrap'
					type='color'
					key={ 'color_picker_place_holder_block' }
					onChange={ () => {
					} }
				/>
			</FieldWrapper>
		</div>,
	];
}

export default ColorPickerEdit;