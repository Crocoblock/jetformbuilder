import preview from './preview';

const {
	      __,
      } = wp.i18n;

const {
	      cloneElement,
	      Children,
      } = wp.element;

const {
	      Placeholder,
	      Flex,
	      ExternalLink,
	      Tooltip,
      } = wp.components;

const {
	      useBlockProps,
      } = wp.blockEditor;

const {
	      useSelect,
	      useDispatch,
      } = wp.data;

const {
	      PatternInserterButton,
	      ToggleControl,
      } = JetFBComponents;

const HelpIcon = <svg
	xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
	width="24" height="24" aria-hidden="true"
	focusable="false"
	style={ {
		color: 'rgb(117, 117, 117)',
	} }
>
	<path
		fill="currentColor"
		d="M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"/>
</svg>;

function WelcomeBlockEdit( { attributes } ) {
	const blockProps = useBlockProps();

	const elements = useSelect(
		select => select( 'jet-forms/patterns' ).getTypes().map(
			( { view: View, ...pattern } ) => <View pattern={ pattern }/>,
		),
		[],
	);

	const saveRecord = useSelect(
		select => select( 'jet-forms/patterns' ).getSetting( 'saveRecord' ),
	);

	const { updateSettings } = useDispatch( 'jet-forms/patterns' );

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	console.log( elements );

	return <div { ...blockProps } >
		<Placeholder
			icon={ 'admin-tools' }
			label={ __( 'Select form pattern', 'jet-form-builder' ) }
			instructions={ __(
				'You can select one of predefined layout, or build custom',
				'jet-form-builder',
			) }
		>
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
			<Flex
				className="block-editor-block-variation-picker__skip"
				justify="space-between"
			>
				<Flex
					justify="flex-start"
					style={ {
						width: 'auto',
					} }
				>
					<PatternInserterButton
						patternName={ 'default' }
						variant="secondary"
						style={ { margin: 'unset' } }
					>
						{ __( 'Start from scratch', 'jet-form-builder' ) }
					</PatternInserterButton>
					<ExternalLink
						href="https://jetformbuilder.com/features/creating-a-form/"
					>
						{ __(
							'Learn more about creating forms',
							'jet-form-builder',
						) }
					</ExternalLink>
				</Flex>
				<div className="jfb-block-variation-picker-toggle">
					<ToggleControl
						checked={ saveRecord }
						onChange={ saveRecord => updateSettings( {
							saveRecord,
						} ) }
						flexLabelProps={ {
							align: 'center',
						} }
					>
						<Flex>
							{ __( 'Save form records', 'jet-form-builder' ) }
							<Tooltip
								text={ __(
									`Adds "Save Form Record" action to store
	all form submissions into database`,
									'jet-form-builder',
								) }
								delay={ 200 }
							>
								{ HelpIcon }
							</Tooltip>
						</Flex>
					</ToggleControl>
				</div>
			</Flex>
		</Placeholder>
	</div>;

}

export default WelcomeBlockEdit;