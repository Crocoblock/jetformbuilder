const {
	      __,
      } = wp.i18n;
const {
	      useSelect,
      } = wp.data;
const {
	      FormTokenField,
	      PanelBody,
      } = wp.components;
const {
	      InspectorControls,
      } = wp.blockEditor;
const {
	      useUniqKey,
      } = JetFBHooks;
const {
	      ActionButtonPlaceholder,
      } = JetFBComponents;
const {
	      column,
      } = JetFBActions;

function SwitcherRenderStateControls( props ) {
	const {
		      actionAttributes,
		      setActionAttributes,
	      } = props;

	const uniqKey = useUniqKey();

	const customStates = useSelect(
		select => column(
			select( 'jet-forms/block-conditions' ).getSwitchableRenderStates(),
			'value',
		),
		[],
	);

	return <>
		<ActionButtonPlaceholder { ...props } />
		<InspectorControls>
			<PanelBody
				title={ __( 'Change Render State', 'jet-form-builder' ) }>
				<FormTokenField
					key={ uniqKey( 'switch_on' ) }
					label={ __( 'Switch state', 'jet-form-builder' ) }
					value={ actionAttributes.switch_on }
					suggestions={ customStates }
					onChange={ switchOn => setActionAttributes(
						{ switch_on: switchOn },
					) }
					tokenizeOnSpace
					__experimentalExpandOnFocus
				/>
			</PanelBody>
		</InspectorControls>
	</>;
}

export default SwitcherRenderStateControls;