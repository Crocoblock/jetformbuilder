import preview from './preview';

const {
	GeneralFields,
	AdvancedFields,
	FieldWrapper,
} = JetFBComponents;

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

export default function HeadingEdit( props ) {
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