import {
	fieldsLayout,
	submitTypes
} from "./options";

const { useMetaState } = JFBHooks;

const {
	TextControl,
	SelectControl,
	ToggleControl,
} = wp.components;

export default function PluginArgs() {

	const [ args, setArgs ] = useMetaState( '_jf_args' );

	return <>
		<SelectControl
			label={ 'Fields Layout' }
			value={ args.fields_layout }
			options={ fieldsLayout }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => ( {
					...prevArgs,
					fields_layout: newVal
				} ) );
			} }
		/>
		<TextControl
			label={ 'Required Mark' }
			value={ args.required_mark }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => ( {
					...prevArgs,
					required_mark: newVal
				} ) );
			} }
		/>
		<SelectControl
			label={ 'Submit Type' }
			value={ args.submit_type }
			options={ submitTypes }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => ( {
					...prevArgs,
					submit_type: newVal
				} ) );
			} }
		/>

		<ToggleControl
			key={ 'enable_progress' }
			label={ 'Enable form pages progress' }
			checked={ args.enable_progress }
			onChange={ newVal => {
				setArgs( prev => ( {
					...prev,
					enable_progress: Boolean( newVal )
				} ) );
			} }
		/>
	</>
};