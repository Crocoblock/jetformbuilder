import GeneralPreset from '@components/presets/general-preset';

const { useMetaState }       = JetFBHooks;
const { getAvailableFields } = JetFBActions;

const {
	      __,
      } = wp.i18n;

// eslint-disable-next-line max-lines-per-function, complexity
function PluginPreset() {

	const {
		      ToggleControl,
	      } = wp.components;

	const [ args, setArgs ] = useMetaState( '_jf_preset' );
	const formFields        = args.enabled
	                          ? getAvailableFields( [], 'preset' )
	                          : [];

	return <>
		<ToggleControl
			key={ 'enable_preset' }
			label={ __( 'Enable', 'jet-form-builder' ) }
			checked={ args.enabled }
			help={ 'Check this to enable global form preset' }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => (
					{
						...prevArgs,
						enabled: newVal,
					}
				) );
			} }
		/>
		{ args.enabled && <>
			<GeneralPreset
				key={ '_jf_preset_general' }
				value={ args }
				onChange={ newVal => {
					setArgs( ( prevArgs ) => (
						{
							...prevArgs,
							...newVal,
							enabled: prevArgs.enabled,
						}
					) );
				} }
				availableFields={ formFields }
			/>
			<ToggleControl
				label={ __( 'Restrict access', 'jet-form-builder' ) }
				checked={ args.restricted ?? true }
				help={ (
					       args.restricted ?? true
				       ) ? __(
					`Will set default value from preset only for users who allowed to edit this value`,
					'jet-form-builder',
				) : __(
					`Always set default value from preset. Make sure it can't be accidentally changed from form Actions`,
					'jet-form-builder',
				) }
				onChange={ newVal => {
					setArgs( ( prevArgs ) => (
						{
							...prevArgs,
							restricted: newVal ? undefined : newVal,
						}
					) );
				} }
			/>
		</> }
	</>;
}

export default PluginPreset;
