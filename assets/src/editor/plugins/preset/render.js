import GeneralPreset from "@components/presets/general-preset";

const { useMetaState } = JFBHooks;
const { getAvailableFields } = JFBFunctions;

function PluginPreset() {

	const {
		ToggleControl,
	} = wp.components;

	const [ args, setArgs ] = useMetaState( '_jf_preset' );
	const formFields = getAvailableFields();

	return <>
		<ToggleControl
			key={ 'enable_preset' }
			label={ 'Enable' }
			checked={ args.enabled }
			help={ 'Check this to enable global form preset' }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => ( {
					...prevArgs,
					enabled: newVal
				} ) );
			} }
		/>
		{ args.enabled && <GeneralPreset
			value={ args }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => ( {
					...prevArgs,
					...newVal,
					enabled: prevArgs.enabled
				} ) );
			} }
			availableFields={ formFields }
		/> }
	</>;
}

export default PluginPreset;
