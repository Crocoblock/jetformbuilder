const { __ } = wp.i18n;

const { TextControl, PanelBody } = wp.components;

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor;

export default function FormBreakStart( props ) {
	const blockProps = useBlockProps( { className: 'jet-form-builder__bottom-line' } );

	const {
		attributes,
		setAttributes,
		editProps: { uniqKey },
	} = props;

	return [
		<InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<PanelBody
				title={ __( 'Advanced', 'jet-form-builder' ) }
			>
				<TextControl
					label={ __( 'CSS Class Name', 'jet-form-builder' ) }
					value={ attributes.class_name }
					onChange={ class_name => setAttributes( { class_name } ) }
				/>
			</PanelBody>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<span>{ __( 'Form Break Start', 'jet-form-builder' ) }</span>
		</div>,
	];
}