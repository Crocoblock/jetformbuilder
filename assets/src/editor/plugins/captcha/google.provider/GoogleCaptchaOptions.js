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
    }   = wp.components;

NumberControl = NumberControl || __experimentalNumberControl;

const { globalTab } = JetFBActions;

const currentTab = globalTab( {
	slug: 'captcha-tab',
	element: 'google',
	empty: {},
} );

function GoogleCaptchaOptions() {
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
			'#captcha-tab__google' }>
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
		<NumberControl
			label={ __( 'Score Threshold', 'jet-form-builder' ) }
			labelPosition="top"
			value={ currentArgs.threshold }
			disabled={ providerArgs.use_global }
			min={ 0 }
			max={ 1 }
			step={ 0.1 }
			placeholder={ '0.5' }
			onChange={ threshold => setProviderArgs(
				{ threshold } ) }
		/>
		<BaseHelp
			style={ { marginTop: '-1em' } }
		>
			{ __(
				`It should be a value between 0 and 1, default 0.5 
(1.0 is very likely a good interaction, 0.0 is very likely a bot).`,
				'jet-form-builder',
			) }
		</BaseHelp>
		<span>{ __( 'Register reCAPTCHA v3 keys', 'jet-form-builder' ) + ' ' }
			<a
				href="https://www.google.com/recaptcha/admin/create"
				target="_blank"
			>
				{ __( 'here', 'jet-form-builder' ) }
			</a>
		</span>
	</>;
}

export default GoogleCaptchaOptions;