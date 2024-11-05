import { __ } from '@wordpress/i18n';
import { TextControl, ExternalLink } from '@wordpress/components';

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
	element: 'friendly',
	empty: {},
} );

function FriendlyCaptchaOptions() {
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
		<BaseHelp>
			{ __(
				`It can be found on the page listing your Applications.`,
				'jet-form-builder',
			) }
			{ ' ' }
			<ExternalLink
				href={ 'https://docs.friendlycaptcha.com/#/installation?id=_1-generating-a-sitekey' }
			>
				{ __( 'Or follow this guide', 'jet-form-builder' ) }
			</ExternalLink>
		</BaseHelp>
		<TextControl
			label={ __( 'Secret Key:', 'jet-form-builder' ) }
			value={ currentArgs.secret }
			help={ __(
				'It can be found on the page listing your API keys.',
				'jet-form-builder',
			) }
			disabled={ providerArgs.use_global }
			onChange={ secret => setProviderArgs( { secret } ) }
		/>
	</>;
}

export default FriendlyCaptchaOptions;