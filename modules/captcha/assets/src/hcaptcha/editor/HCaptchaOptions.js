import { TextControl, ExternalLink } from '@wordpress/components';

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

const { globalTab } = JetFBActions;

const currentTab = globalTab( {
	slug: 'captcha-tab',
	element: 'hcaptcha',
	empty: {},
} );

function HCaptchaOptions() {
	const [ providerArgs, setProviderArgs ] = useCaptchaProvider();

	const currentArgs = providerArgs.use_global
	                    ? currentTab
	                    : providerArgs;

	return <>
		<ToggleControl
			checked={ providerArgs.use_global }
			onChange={ val => setProviderArgs(
				{ use_global: val } ) }
		>
			{ __( 'Use', 'jet-form-builder' ) + ' ' }
			<a href={ JetFormEditorData.global_settings_url +
			'#captcha-tab__hcaptcha' }>
				{ __( 'Global Settings', 'jet-form-builder' ) }
			</a>
		</ToggleControl>
		<TextControl
			label={ __( 'Site Key:', 'jet-form-builder' ) }
			value={ currentArgs.key }
			disabled={ providerArgs.use_global }
			onChange={ key => setProviderArgs( { key } ) }
		/>
		<BaseHelp>
			{ __(
				'You can find it on this page in the first column of Sitekey.',
				'jet-form-builder',
			) + ' ' }
			<ExternalLink href={ 'https://dashboard.hcaptcha.com/sites' }>
				{ __( 'Go to the dashboard of sites', 'jet-form-builder' ) }
			</ExternalLink>
		</BaseHelp>
		<TextControl
			label={ __( 'Secret Key:', 'jet-form-builder' ) }
			value={ currentArgs.secret }
			disabled={ providerArgs.use_global }
			onChange={ secret => setProviderArgs( { secret } ) }
		/>
		<BaseHelp>
			{ __(
				`You can find it on the settings page, this will be the first field.`,
				'jet-form-builder',
			) }
			{ ' ' }
			<ExternalLink href={ 'https://dashboard.hcaptcha.com/settings' }>
				{ __( 'Go to the Settings page', 'jet-form-builder' ) }
			</ExternalLink>
		</BaseHelp>
	</>;
}

export default HCaptchaOptions;