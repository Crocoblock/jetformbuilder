import { SelectRadioCheckPlaceholder } from "../../components/base-select-check-radio/select-radio-check-placeholder";
import SelectRadioCheck from "../../components/base-select-check-radio/select-radio-check";

const {
	ToolBarFields,
	GeneralFields,
	AdvancedFields,
} = JetFBComponents;

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

export default function RadioEdit( props ) {

	const { isSelected, editProps: { uniqKey } } = props;
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
			<SelectRadioCheck { ...props }/>
			<SelectRadioCheckPlaceholder
				key={ uniqKey( 'SelectRadioCheckPlaceholder' ) }
				scriptData={ window.JetFormRadioFieldData }
				{ ...props }
			/>
		</div>
	];
}