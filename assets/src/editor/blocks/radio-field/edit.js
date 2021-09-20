import { SelectRadioCheckPlaceholder } from "../../components/base-select-check-radio/select-radio-check-placeholder";
import SelectRadioCheck from "../../components/base-select-check-radio/select-radio-check";

const {
		  ToolBarFields,
		  GeneralFields,
		  AdvancedFields,
		  FieldControl,
	  } = JetFBComponents;

const { __ } = wp.i18n;

const {
		  InspectorControls,
		  useBlockProps,
	  } = wp.blockEditor ? wp.blockEditor : wp.editor;

const { ToggleControl } = wp.components;

export default function RadioEdit( props ) {

	const {
			  isSelected,
			  editProps: { uniqKey, attrHelp },
			  attributes,
			  setAttributes,
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
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
			/>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<SelectRadioCheckPlaceholder
				key={ uniqKey( 'SelectRadioCheckPlaceholder' ) }
				scriptData={ window.JetFormRadioFieldData }
				{ ...props }
			/>
			<SelectRadioCheck { ...props }>
				<ToggleControl
					key='switch_on_change'
					label={ __( 'Switch page on change' ) }
					checked={ attributes.switch_on_change }
					help={ attrHelp( 'switch_on_change' ) }
					onChange={ ( newValue ) => {
						setAttributes( { switch_on_change: Boolean( newValue ) } );
					} }
				/>
				<FieldControl
					type='custom_settings'
					key={ uniqKey( 'customSettingsFields' ) }
					{ ...props }
				/>
			</SelectRadioCheck>
		</div>
	];
}