const {
	GeneralFields,
	AdvancedFields,
} = JFBComponents;

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	Button,
} = wp.components;

export default function SubmitEdit( props ) {

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey }
	} = props;

	const blockProps = useBlockProps( { className: 'jet-form-builder__submit-wrap' } );

	return [
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
				attrsSettings={ {
					name: { show: false }
				} }
			/>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'submit-wrap' ) }>
			<Button
				isPrimary
				className={ 'jet-form-builder__submit' }
				key={ uniqKey( 'place_holder_block' ) }
			>
				{ attributes.label || 'Submit' }
			</Button>
		</div>
	];
}