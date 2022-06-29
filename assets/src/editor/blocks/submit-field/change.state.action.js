const { __ } = wp.i18n;
const { useSelect } = wp.data;
const { FormTokenField } = wp.components;
const { useUniqKey } = JetFBHooks;
const { Tools } = JetFBActions;

function SwitcherRenderStateButton( { attributes, setAttributes } ) {
	const uniqKey = useUniqKey();

	const customStates = useSelect(
		select => select( 'jet-forms/block-conditions' ).getCustomRenderStatesList(),
		[],
	);

	return <FormTokenField
		key={ uniqKey( 'switch_on' ) }
		label={ __( 'Switch on state', 'jet-form-builder' ) }
		value={ attributes.switch_on }
		suggestions={ customStates }
		onChange={ switch_on => setAttributes( { switch_on } ) }
		tokenizeOnSpace
		__experimentalExpandOnFocus
	/>;
}

wp.data.dispatch( 'jet-forms/action-buttons' ).register(
	'switch-state',
	SwitcherRenderStateButton,
);