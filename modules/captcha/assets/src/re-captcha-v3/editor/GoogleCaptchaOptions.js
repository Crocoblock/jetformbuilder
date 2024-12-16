import {
	ExternalLink,
	TextControl,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const {
	      ToggleControl,
	      BaseHelp,
      } = JetFBComponents;
const {
	      useCaptchaProvider,
      } = JetFBHooks;

const {
		useEffect,
	  } = wp.element;

const { globalTab } = JetFBActions;

const currentTab = globalTab( {
	slug: 'captcha-tab',
	element: 'google',
	empty: {},
} );

// eslint-disable-next-line max-lines-per-function
function GoogleCaptchaOptions() {
	const [ providerArgs, setProviderArgs ] = useCaptchaProvider();

	const currentArgs = providerArgs.use_global
	                    ? currentTab
	                    : providerArgs;

	useEffect( () => {
		setProviderArgs(
			{
				key: currentArgs.key,
				secret: currentArgs.secret,
				threshold: currentArgs.threshold
			}
		);
	}, [ providerArgs.use_global ] );

	return <>
		<ToggleControl
			checked={ providerArgs.use_global }
			onChange={ val => setProviderArgs(
				{ use_global: val },
			) }
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
			style={ { margin: '1em 0' } }
		>
			{ __(
				`It should be a value between 0 and 1, default 0.5 (1.0 is very likely a good interaction, 0.0 is very likely a bot).`,
				'jet-form-builder',
			) }
		</BaseHelp>
		<ExternalLink
			href="https://www.google.com/recaptcha/admin/create"
		>
			{ __(
				'Register reCAPTCHA v3 keys here',
				'jet-form-builder',
			) }
		</ExternalLink>
	</>;
}

export default GoogleCaptchaOptions;