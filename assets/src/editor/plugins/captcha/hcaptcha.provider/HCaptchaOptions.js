const {
	      __,
      } = wp.i18n;
const {
	      ToggleControl,
	      BaseHelp,
      } = JetFBComponents;
let {
	    TextControl,
	    NumberControl,
	    __experimentalNumberControl,
    }   = wp.components;

NumberControl = NumberControl || __experimentalNumberControl;

function HCaptchaOptions( { providerArgs, setProviderArgs } ) {
	return <>
		<ToggleControl
			checked={ providerArgs.use_global }
			onChange={ use_global => setProviderArgs(
				{ use_global } ) }
		>
			{ __( 'Use', 'jet-form-builder' ) + ' ' }
			<a href={ JetFormEditorData.global_settings_url +
			'#captcha-tab__hcaptcha' }>
				{ __( 'Global Settings', 'jet-form-builder' ) }
			</a>
		</ToggleControl>
		<TextControl
			label={ __( 'Site Key:', 'jet-form-builder' ) }
			value={ providerArgs.key }
			disabled={ providerArgs.use_global }
			onChange={ key => setProviderArgs( { key } ) }
		/>
		<TextControl
			label={ __( 'Secret Key:', 'jet-form-builder' ) }
			value={ providerArgs.secret }
			disabled={ providerArgs.use_global }
			onChange={ secret => setProviderArgs( { secret } ) }
		/>
	</>;
}

export default HCaptchaOptions;