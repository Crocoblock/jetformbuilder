const {
	      __,
      } = wp.i18n;
const {
	      ToggleControl,
      } = JetFBComponents;
let {
	    TextControl,
	    NumberControl,
	    __experimentalNumberControl,
    }   = wp.components;

NumberControl = NumberControl || __experimentalNumberControl;

const { globalTab } = JetFBActions;

const currentTab = globalTab( {
	slug: 'captcha-tab',
	element: 'friendly',
	empty: {},
} );

function FriendlyCaptchaOptions( { providerArgs, setProviderArgs } ) {
	const currentArgs = providerArgs.use_global ? currentTab : providerArgs;

	return <>
		<ToggleControl
			checked={ providerArgs.use_global }
			onChange={ use_global => setProviderArgs(
				{ use_global } ) }
		>
			{ __( 'Use', 'jet-form-builder' ) + ' ' }
			<a href={ JetFormEditorData.global_settings_url +
			'#captcha-tab__friendly' }>
				{ __( 'Global Settings', 'jet-form-builder' ) }
			</a>
		</ToggleControl>
		<TextControl
			label={ __( 'Site Key:', 'jet-form-builder' ) }
			value={ currentArgs.key }
			disabled={ providerArgs.use_global }
			onChange={ key => setProviderArgs( { key } ) }
		/>
		<TextControl
			label={ __( 'Secret Key:', 'jet-form-builder' ) }
			value={ currentArgs.secret }
			disabled={ providerArgs.use_global }
			onChange={ secret => setProviderArgs( { secret } ) }
		/>
	</>;
}

export default FriendlyCaptchaOptions;