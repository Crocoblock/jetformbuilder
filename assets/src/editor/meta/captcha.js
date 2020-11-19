function Captcha() {

	const { __ } = wp.i18n;

	const {
		ToggleControl,
		TextControl,
	} = wp.components;

	const {
		registerPlugin
	} = wp.plugins;

	const {
		PluginDocumentSettingPanel
	} = wp.editPost;

	const {
		useSelect,
		useDispatch
	} = wp.data;

	const {
		useState,
		useEffect
	} = wp.element;

	const DocumentSettingPanel = () => {

		const meta = useSelect( ( select ) => {
			return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
		} );

		const {
			editPost
		} = useDispatch( 'core/editor' );

		const [ args, setArgs ] = useState( JSON.parse( meta._jf_recaptcha ) );

		useEffect( () => {

			editPost({
				meta: ( {
					...meta,
					_jf_recaptcha: JSON.stringify( args )
				} )
			});

		} );
		const data = window.JetFormEditorData.recaptchaLabels;

		return (
			<PluginDocumentSettingPanel
				name={ 'jf-captcha' }
				title={ 'Captcha Settings' }
				key={ 'jf-captcha-panel' }
			>
				<ToggleControl
					key={ 'enabled' }
					label={ data.enabled }
					checked={ args.enabled }
					onChange={ newVal => {
						setArgs( ( prevArgs ) => ( {
							...prevArgs,
							enabled: Boolean( newVal )
						} ) );
					} }
				/>
				{ args.enabled && <React.Fragment>
					<TextControl
						key={ 'site_key' }
						label={ data.key }
						value={ args.key }
						onChange={ newValue => setArgs( ( prevArgs ) => ( {
							...prevArgs,
							key: newValue
						} ) ) }
					/>
					<TextControl
						key={ 'secret_key' }
						label={ data.secret }
						value={ args.secret }
						onChange={ newValue => setArgs( ( prevArgs ) => ( {
							...prevArgs,
							secret: newValue
						} ) ) }
					/>
				</React.Fragment> }
			</PluginDocumentSettingPanel>
		)
	};

	registerPlugin( 'jf-captcha-panel', {
		render: DocumentSettingPanel,
		icon: null,
	} );
}

export default Captcha;
