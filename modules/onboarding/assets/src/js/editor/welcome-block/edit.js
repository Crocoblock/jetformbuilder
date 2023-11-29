const {
	      __,
      } = wp.i18n;

const {
	      cloneElement,
	      Children,
      } = wp.element;

const {
	      Placeholder,
      } = wp.components;

const {
	      useBlockProps,
      } = wp.blockEditor;

const {
	      useSelect,
      } = wp.data;

const {
	      PatternInserterButton,
      } = JetFBComponents;

function WelcomeBlockEdit( props ) {
	const elements = useSelect(
		select => select( 'jet-forms/patterns' ).getTypes().map(
			( { view: View, ...pattern } ) => <View pattern={ pattern }/>,
		),
		[],
	);

	const blockProps = useBlockProps();

	return <div { ...blockProps } >
		<Placeholder
			icon={ 'admin-tools' }
			label={ __( 'Select form pattern', 'jet-form-builder' ) }
			instructions={ __(
				'You can select one of predefined layout, or build custom',
				'jet-form-builder',
			) }
		>
			{ /*
			 * Disable reason: The `list` ARIA role is redundant but
			 * Safari+VoiceOver won't announce the list otherwise.
			 */
				/* eslint-disable jsx-a11y/no-redundant-roles */ }
			<ul
				className="block-editor-block-variation-picker__variations jet-fb"
				role="list"
				aria-label={ __( 'Form patterns', 'jet-form-builder' ) }
			>
				{ Children.map(
					elements,
					cloneElement,
				) }
			</ul>
			{ /* eslint-enable jsx-a11y/no-redundant-roles */ }
			<div className="block-editor-block-variation-picker__skip">
				<PatternInserterButton
					patternName={ 'default' }
					variant="link"
				>
					{ __( 'Start from scratch', 'jet-form-builder' ) }
				</PatternInserterButton>
			</div>
		</Placeholder>
	</div>;

}

export default WelcomeBlockEdit;