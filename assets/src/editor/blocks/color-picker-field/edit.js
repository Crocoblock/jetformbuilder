import preview from './preview';

const {
	      AdvancedFields,
	      GeneralFields,
	      ToolBarFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
      } = JetFBComponents;
const {
	      useUniqKey,
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const {
	      __experimentalInputControl,
      } = wp.components;

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
	const uniqKey    = useUniqKey();
	useUniqueNameOnDuplicate();

	const { isSelected, attributes } = props;

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
			<GeneralFields/>
			<FieldSettingsWrapper/>
			<AdvancedFields/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<InputControl
					className="jet-form-builder__field-wrap"
					type="color"
					key={ 'color_picker_place_holder_block' }
					onChange={ () => {
					} }
				/>
			</FieldWrapper>
		</div>,
	];
}

export default ColorPickerEdit;