/*import {
	countriesList,
	labels,
	help,
	types,
} from '@/source';*/

const {
		  AdvancedFields,
		  GeneralFields,
		  ToolBarFields,
		  FieldWrapper,
		  FieldSettingsWrapper,
	  } = JetFBComponents;

const {
		  getBlockControls,
	  } = JetFBActions;

const {
		  TextControl,
		  __experimentalInputControl,
	  } = wp.components;

const { __ } = wp.i18n;

const {
		  applyFilters,
	  } = wp.hooks;

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

	const fieldComponent = applyFilters( 'jet.fb.color.picker.view', <InputControl
		type='color'
		key={ uniqKey( 'place_holder_block' ) }
		onChange={ () => {
		} }
	/>, props );

	const customControls = getBlockControls( 'custom_settings' );

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
			{ customControls && <FieldSettingsWrapper { ...props } /> }
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
				{ fieldComponent }
			</FieldWrapper>
		</div>,
	];
}

export default ColorPickerEdit;