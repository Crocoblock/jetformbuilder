import ValidationModal from './modal';

const {
	      Button,
	      ToggleControl,
	      __experimentalToggleGroupControl: ToggleGroupControl,
	      __experimentalToggleGroupControlOption: ToggleGroupControlOption,
      }                = wp.components;
const { __ }           = wp.i18n;
const { useState }     = wp.element;
const { useMetaState } = JetFBHooks;
const { ActionModal }  = JetFBComponents;
const { formats }      = window.jetFormValidation;

function ValidationPlugin() {
	const [ validation, setValidation ] = useMetaState( '_jf_validation' );
	const [ args, setArgs ]             = useMetaState( '_jf_args' );

	const [ isEditValidation, setEditValidation ] = useState( false );
	const [ isLoadNonce, setLoadNonce ]           = useState( 'render' === (
		args?.load_nonce ?? 'render'
	) );

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
				setArgs( prev => {
					const load_nonce = (
						                   !isLoadNonce
					                   ) ? 'hide' : 'render';

					return { ...prev, load_nonce };
				} );
			} }
		/>

		<ToggleControl
			key={ 'use_csrf' }
			label={ __( 'Enable csrf protection', 'jet-form-builder' ) }
			checked={ args.use_csrf }
			onChange={ () => {
				setArgs( prev => {
					const use_csrf = !Boolean( prev.use_csrf );

					return { ...prev, use_csrf };
				} );
			} }
		/>
		<ToggleGroupControl
			onChange={ type => setValidation( prev => (
				{ ...prev, type }
			) ) }
			value={ validation.type ?? 'browser' }
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