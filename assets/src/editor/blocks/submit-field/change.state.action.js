const { __ } = wp.i18n;
const { useSelect } = wp.data;
const { SelectControl } = wp.components;
const { useUniqKey } = JetFBHooks;
const { Tools } = JetFBActions;

function SwitcherRenderStateButton( { attributes, setAttributes } ) {
	const uniqKey = useUniqKey();

	const customStates = useSelect(
		select => select( 'jet-forms/block-conditions' ).getCustomRenderStates(),
		[]
	);

	return <SelectControl
		key={ uniqKey( 'switch_on' ) }
		label={ __( 'Switch on state', 'jet-form-builder' ) }
		value={ attributes.switch_on }
		options={ Tools.withPlaceholder( customStates ) }
		onChange={ switch_on => setAttributes( { switch_on } ) }
	/>;
}

wp.data.dispatch( 'jet-forms/action-buttons' ).register(
	'switch-state',
	SwitcherRenderStateButton,
);