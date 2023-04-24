const {
	      __,
      } = wp.i18n;
const {
	      ToggleControl,
	      BaseHelp,
      } = JetFBComponents;
const {
	      useCaptchaProvider,
      } = JetFBHooks;
let {
	    TextControl,
	    NumberControl,
	    __experimentalNumberControl,
	    ExternalLink,
    }   = wp.components;

NumberControl = NumberControl || __experimentalNumberControl;

const currentTab = JetFBActions.globalTab( {
	slug: 'captcha-tab',
	element: 'turnstile',
	empty: {},
} );

function TurnstileOptions() {
	const [ providerArgs, setProviderArgs ] = useCaptchaProvider();

	const currentArgs = providerArgs.use_global
	                    ? currentTab
	                    : providerArgs;

	return <>
		<ToggleControl
			checked={ providerArgs.use_global }
			onChange={ use_global => setProviderArgs(
				{ use_global } ) }
		>
			{ __( 'Use', 'jet-form-builder' ) + ' ' }
			<a href={ JetFormEditorData.global_settings_url +
			'#captcha-tab__turnstile' }>
				{ __( 'Global Settings', 'jet-form-builder' ) }
			</a>
		</ToggleControl>
		<TextControl
			label={ __( 'Site Key:', 'jet-form-builder' ) }
			value={ currentArgs.key }
			help={ __(
				'Read the hint to the Secret Key field',
				'jet-form-builder',
			) }
			disabled={ providerArgs.use_global }
			onChange={ key => setProviderArgs( { key } ) }
		/>
		<TextControl
			label={ __( 'Secret Key:', 'jet-form-builder' ) }
			value={ currentArgs.secret }
			help={ __(
				'You can find both keys on your Turnstile Site settings page',
				'jet-form-builder',
			) }
			disabled={ providerArgs.use_global }
			onChange={ secret => setProviderArgs( { secret } ) }
		/>
		<BaseHelp>
			{ __( 'Didn\'t find it? Here is', 'jet-form-builder' ) + ' ' }
			<ExternalLink
				href={ 'https://developers.cloudflare.com/turnstile/get-started/#get-a-sitekey-and-secret-key' }
			>
				{ __( 'a more detailed description', 'jet-form-builder' ) }
			</ExternalLink>
		</BaseHelp>
	</>;
}

export default TurnstileOptions;