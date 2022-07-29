import ValidationModal from './modal';

const {
	      Button,
	      __experimentalToggleGroupControl: ToggleGroupControl,
	      __experimentalToggleGroupControlOption: ToggleGroupControlOption,
      }                = wp.components;
const { __ }           = wp.i18n;
const { useState }     = wp.element;
const { useMetaState } = JetFBHooks;
const { ActionModal }  = JetFBComponents;
const { formats }      = window.jetFormValidation;

function ValidationPlugin() {
	const [ args, setArgs ] = useMetaState( '_jf_validation' );

	const [ isEditValidation, setEditValidation ] = useState( false );

	return <>
		<ToggleGroupControl
			onChange={ type => setArgs( prev => (
				{ ...prev, type }
			) ) }
			value={ args.type ?? 'browser' }
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
		{ 'advanced' === args.type && <Button
			isTertiary
			isSmall
			icon={ 'edit' }
			onClick={ () => setEditValidation( true ) }
		/> }
		{ isEditValidation && <ValidationModal
			updateState={ setEditValidation }
			setArgs={ setArgs }
		/> }
	</>;
}

export default ValidationPlugin;