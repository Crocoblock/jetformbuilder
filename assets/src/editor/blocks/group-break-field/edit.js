import { AdvancedFields } from "../controls/field-control";

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps
} = wp.blockEditor ? wp.blockEditor : wp.editor;


export default function GroupBreakEdit( props ) {
	const blockProps = useBlockProps();

	const {
		isSelected,
		editProps: { uniqKey }
	} = props;

	return [
		isSelected && <InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps }>
			<div className={ 'jet-form-builder__group-break' }>
				<span>{ __( 'GROUP BREAK' ) }</span>
			</div>
		</div>
	];
}