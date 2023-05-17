const { __ } = wp.i18n;

let {
	    useBlockProps,
    } = wp.blockEditor;

const {
	      Placeholder,
      } = wp.components;

export default function EditAdvancedChoicesField( props ) {
	const blockProps = useBlockProps();

	return <Placeholder
		instructions={ __(
			'You should update your WordPress to version 6.2 or higher',
			'jet-form-builder'
		) }
		label={ __( 'Advanced Choices not supported', 'jet-form-builder' ) }
		{ ...blockProps }
	/>;
}