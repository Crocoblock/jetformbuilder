import { help, labels } from './options';

const {
	      __,
      } = wp.i18n;
const {
	      useMetaState,
      } = JetFBHooks;
const {
	      ToggleControl,
	      BaseHelp,
      } = JetFBComponents;
const {
	      ToggleControl: CoreToggleControl,
	      TextControl,
	      __experimentalNumberControl,
      } = wp.components;

let { NumberControl } = wp.components;

NumberControl = NumberControl || __experimentalNumberControl;

const { globalTab } = JetFBActions;
const currentTab    = globalTab( { slug: 'captcha-tab' } );

function PluginCaptcha() {

	const [ args, setArgs ] = useMetaState( '_jf_recaptcha' );

	let score = args.use_global
	            ? currentTab.threshold
	            : args.threshold;

	return <>
		<CoreToggleControl
			key={ 'enabled' }
			label={ labels.enabled }
			checked={ args.enabled }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => (
					{
						...prevArgs,
						enabled: Boolean( newVal ),
					}
				) );
			} }
		/>
		{ args.enabled && <>
			<ToggleControl
				checked={ args.use_global }
				onChange={ use_global => {
					setArgs( prevArgs => (
						{
							...prevArgs,
							use_global: Boolean( use_global ),
						}
					) );
				} }
			>
				{ __( 'Use', 'jet-form-builder' ) + ' ' }
				<a href={ JetFormEditorData.global_settings_url +
				'#captcha-tab' }>
					{ __( 'Global Settings', 'jet-form-builder' ) }
				</a>
			</ToggleControl>
			<TextControl
				key={ 'site_key' }
				label={ labels.key }
				value={ args.use_global ? currentTab.key : args.key }
				disabled={ args.use_global }
				onChange={ newValue => setArgs( ( prevArgs ) => (
					{
						...prevArgs,
						key: newValue,
					}
				) ) }
			/>
			<TextControl
				key={ 'secret_key' }
				label={ labels.secret }
				value={ args.use_global ? currentTab.secret : args.secret }
				disabled={ args.use_global }
				onChange={ newValue => setArgs( ( prevArgs ) => (
					{
						...prevArgs,
						secret: newValue,
					}
				) ) }
			/>
			<NumberControl
				label={ labels.threshold }
				labelPosition="top"
				value={ score }
				disabled={ args.use_global }
				min={ 0 }
				max={ 1 }
				step={ 0.1 }
				placeholder={ '0.5' }
				onChange={ newValue => setArgs( ( prevArgs ) => (
					{
						...prevArgs,
						threshold: newValue,
					}
				) ) }
			/>
			<BaseHelp
				style={ { marginTop: '-1em' } }
			>
				{ help.threshold }
			</BaseHelp>
			<span>{ 'Register reCAPTCHA v3 keys ' }
				<a href="https://www.google.com/recaptcha/admin/create"
				   target="_blank">here</a>
					</span>
		</> }
	</>;
}

export default PluginCaptcha;
