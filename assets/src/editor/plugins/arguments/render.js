import {
	fieldsLayout,
	submitTypes,
} from "./options";

const { useMetaState } = JetFBHooks;

const {
		  TextControl,
		  SelectControl,
		  ToggleControl,
	  } = wp.components;

const { __ } = wp.i18n;

export default function PluginArgs() {

	const [ args, setArgs ] = useMetaState( '_jf_args' );

	return <>
		<SelectControl
			label={ __( 'Fields Layout', 'jet-form-builder' ) }
			value={ args.fields_layout }
			options={ fieldsLayout }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => ( {
					...prevArgs,
					fields_layout: newVal,
				} ) );
			} }
		/>
		<TextControl
			label={ __( 'Required Mark', 'jet-form-builder' ) }
			value={ args.required_mark }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => ( {
					...prevArgs,
					required_mark: newVal,
				} ) );
			} }
		/>
		<SelectControl
			label={ __( 'Submit Type', 'jet-form-builder' ) }
			value={ args.submit_type }
			options={ submitTypes }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => ( {
					...prevArgs,
					submit_type: newVal,
				} ) );
			} }
		/>

		<ToggleControl
			key={ 'enable_progress' }
			label={ __( 'Enable form pages progress', 'jet-from-builder' ) }
			checked={ args.enable_progress }
			onChange={ newVal => {
				setArgs( prev => ( {
					...prev,
					enable_progress: Boolean( newVal ),
				} ) );
			} }
		/>
	</>
};