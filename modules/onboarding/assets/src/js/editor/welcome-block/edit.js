const {
	      __,
      } = wp.i18n;

const {
	      applyFilters,
      } = wp.hooks;

const {
	      cloneElement,
	      Children,
	      useMemo,
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
	const patterns = useSelect(
		select => select( 'jet-forms/patterns' ).getTypes(),
		[],
	);

	const blockProps = useBlockProps();

	const elements = useMemo(
		() => applyFilters(
			'jet.fb.welcome.block.patterns.elements',
			patterns.map( ( pattern ) => <SinglePattern pattern={ pattern }/> ),
		),
		[],
	);

	return <Placeholder
		icon={ 'admin-tools' }
		label={ __( 'Select form pattern', 'jet-form-builder' ) }
		instructions={ __(
			'You can select one of predefined layout, or build custom',
			'jet-form-builder',
		) }
		{ ...blockProps }
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
	</Placeholder>;

}

function SinglePattern( { pattern } ) {
	return <li key={ pattern.name }>
		<PatternInserterButton
			key={ pattern.name }
			variant="secondary"
			patternName={ pattern.name }
			withPatternIcon
			iconSize={ 48 }
			className="block-editor-block-variation-picker__variation"
		/>
		<span
			className="block-editor-block-variation-picker__variation-label"
		>
			{ pattern.title }
		</span>
	</li>;
}

export default WelcomeBlockEdit;