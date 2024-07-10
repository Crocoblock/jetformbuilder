import ValidationModal from './modal';

const {
	      Button,
	      ToggleControl,
	      __experimentalToggleGroupControl: ToggleGroupControl,
	      __experimentalToggleGroupControlOption: ToggleGroupControlOption,
      } = wp.components;
const {
	      __,
      } = wp.i18n;
const {
	      useState,
	      useEffect,
      } = wp.element;
const {
	      useMetaState,
      } = JetFBHooks;
const {
	      ActionModal,
      } = JetFBComponents;
const {
	      formats,
      } = window.jetFormValidation;

// eslint-disable-next-line max-lines-per-function
function ValidationPlugin() {
	const [ validation, setValidation ] = useMetaState( '_jf_validation' );
	const [ args, setArgs ]             = useMetaState( '_jf_args' );

	const [ isEditValidation, setEditValidation ] = useState( false );
	const [ isLoadNonce, setLoadNonce ]           = useState( 'render' === (
		args.load_nonce
	) );

	useEffect( () => {
		setArgs( prev => {
			const loadNonce = (
				                   !isLoadNonce
			                   ) ? 'hide' : 'render';

			return { ...prev, load_nonce: loadNonce };
		} );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ isLoadNonce ] );

	return <>
		<ToggleControl
			key={ 'load_nonce' }
			label={ __( 'Enable form safety', 'jet-form-builder' ) }
			checked={ isLoadNonce }
			help={ __(
				`Protects the form with a WordPress nonce. Toggle this option off if the form's page's caching can't be disabled`,
				'jet-form-builder' ) }
			onChange={ () => {
				setLoadNonce( prev => !prev );
			} }
		/>
		<ToggleControl
			label={ __( 'Enable csrf protection', 'jet-form-builder' ) }
			checked={ args?.use_csrf ?? false }
			onChange={ () => {
				setArgs( prev => {
					const useCsrf = !Boolean( prev.use_csrf );

					return { ...prev, use_csrf: useCsrf };
				} );
			} }
		/>
		<ToggleControl
			label={ __( 'Enable Honeypot protection', 'jet-form-builder' ) }
			checked={ args?.use_honeypot ?? false }
			onChange={ () => {
				setArgs( prev => (
					{
						...prev,
						use_honeypot: !Boolean( prev.use_honeypot ),
					}
				) );
			} }
		/>
		<ToggleGroupControl
			onChange={ type => setValidation( prev => (
				{ ...prev, type }
			) ) }
			value={ validation?.type ?? 'browser' }
			label={ __( 'Validation type', 'jet-form-builder' ) }
			isBlock={ true }
			isAdaptiveWidth={ false }
		>
			{ formats.map(
				current => <ToggleGroupControlOption
					key={ current.value + '_key' }
					label={ current.label }
					value={ current.value }
					aria-label={ current.title }
					showTooltip
				/> ) }
		</ToggleGroupControl>
		{ 'advanced' === validation.type && <Button
			className={ 'jet-fb-button w-100 jc-center' }
			isSecondary
			isSmall
			icon={ 'edit' }
			onClick={ () => setEditValidation( true ) }
		>
			{ __( 'Edit validation messages', 'jet-form-builder' ) }
		</Button> }
		{ isEditValidation && <ActionModal
			title={ 'Edit Manual Options' }
			onRequestClose={ () => setEditValidation( false ) }
			classNames={ [ 'width-60' ] }
		>
			<ValidationModal/>
		</ActionModal> }
	</>;
}

export default ValidationPlugin;