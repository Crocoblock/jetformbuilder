import { labels } from "./options";

const { __ } = wp.i18n;
const { useMetaState } = JFBHooks;
const {
	ToggleControl,
	TextControl,
} = wp.components;

function PluginCaptcha() {

	const [ args, setArgs ] = useMetaState( '_jf_recaptcha' );

	return <>
		<ToggleControl
			key={ 'enabled' }
			label={ labels.enabled }
			checked={ args.enabled }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => ( {
					...prevArgs,
					enabled: Boolean( newVal )
				} ) );
			} }
		/>
		{ args.enabled && <>
			<TextControl
				key={ 'site_key' }
				label={ labels.key }
				value={ args.key }
				onChange={ newValue => setArgs( ( prevArgs ) => ( {
					...prevArgs,
					key: newValue
				} ) ) }
			/>
			<TextControl
				key={ 'secret_key' }
				label={ labels.secret }
				value={ args.secret }
				onChange={ newValue => setArgs( ( prevArgs ) => ( {
					...prevArgs,
					secret: newValue
				} ) ) }
			/>
			<span>{ 'Register reCAPTCHA v3 keys ' }
				<a href="https://www.google.com/recaptcha/admin/create" target="_blank">here</a>
					</span>
		</> }
	</>
};


export default PluginCaptcha;
