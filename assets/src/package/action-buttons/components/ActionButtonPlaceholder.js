const {
	      useBlockProps,
	      RichText,
      } = wp.blockEditor;

const {
	      Button,
      } = wp.components;

function ActionButtonPlaceholder( props ) {
	const blockProps = useBlockProps();

	return <div { ...blockProps } >
		<div className={ props.wrapperClasses.join( ' ' ) }>
			<Button
				isPrimary
				className={ props.buttonClasses.join( ' ' ) }
			>
				<RichText
					placeholder="Input Submit label..."
					allowedFormats={ [] }
					value={ props.attributes.label }
					onChange={ label => props.setAttributes( { label } ) }
				/>
			</Button>
		</div>
	</div>;
}

export default ActionButtonPlaceholder;