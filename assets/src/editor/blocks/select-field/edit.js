import { SelectRadioCheckPlaceholder } from "../../components/base-select-check-radio/select-radio-check-placeholder";
import SelectRadioCheck from "../../components/base-select-check-radio/select-radio-check";

const { __ } = wp.i18n;

const {
	ToolBarFields,
	GeneralFields,
	AdvancedFields,
} = JFBComponents;

const {
	BlockControls,
	InspectorControls,
	useBlockProps
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	ToggleControl,
} = wp.components;

export default function SelectEdit( props ) {

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey, attrHelp }
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
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
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
			</SelectRadioCheck>
			<SelectRadioCheckPlaceholder
				scriptData={ window.JetFormSelectFieldData }
				{ ...props }
			/>
		</div>
	];
}