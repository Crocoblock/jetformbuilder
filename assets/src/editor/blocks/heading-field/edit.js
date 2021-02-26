import FieldWrapper from "../../components/field-wrapper";
import { AdvancedFields, GeneralFields } from "../controls/field-control";

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

export default function HeadingEdit( props ) {
	const blockProps = useBlockProps();

	const {
		isSelected,
		editProps: { uniqKey }
	} = props;

	return [
		isSelected && <InspectorControls key={ uniqKey( 'InspectorControls' ) }>
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
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				valueIfEmptyLabel={ 'Heading' }
				{ ...props }
			/>
		</div>
	];
}