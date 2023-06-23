import preview from './preview';

const {
	AdvancedFields,
} = JetFBComponents;

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps
} = wp.blockEditor ? wp.blockEditor : wp.editor;


export default function GroupBreakEdit( props ) {
	const blockProps = useBlockProps();

	const {
		isSelected,
		attributes,
		editProps: { uniqKey }
	} = props;

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
		isSelected && <InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps }>
			<div className={ 'jet-form-builder__group-break jet-form-builder__bottom-line' }>
				<span>{ __( 'GROUP BREAK' ) }</span>
			</div>
		</div>
	];
}