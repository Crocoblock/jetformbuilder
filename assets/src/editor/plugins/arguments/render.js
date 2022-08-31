const {
	      useMetaState,
      }      = JetFBHooks;
const {
	      TextControl,
	      SelectControl,
	      ToggleControl,
      } = wp.components;

const { __ } = wp.i18n;

const source = window.JetFormEditorData.argumentsSource || {};

export default function PluginArgs() {

	const [ args, setArgs ] = useMetaState( '_jf_args' );

	return <>
		<SelectControl
			label={ __( 'Fields Layout', 'jet-form-builder' ) }
			value={ args.fields_layout }
			options={ source.fields_layout }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => (
					{
						...prevArgs,
						fields_layout: newVal,
					}
				) );
			} }
		/>
		<TextControl
			label={ __( 'Required Mark', 'jet-form-builder' ) }
			value={ args.required_mark }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => (
					{
						...prevArgs,
						required_mark: newVal,
					}
				) );
			} }
		/>

		<SelectControl
			label={ __( 'Fields label HTML tag', 'jet-form-builder' ) }
			value={ args.fields_label_tag }
			options={ source.fields_label_tag }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => (
					{
						...prevArgs,
						fields_label_tag: newVal,
					}
				) );
			} }
		/>

		<SelectControl
			label={ __( 'Submit Type', 'jet-form-builder' ) }
			value={ args.submit_type }
			options={ source.submit_type }
			onChange={ newVal => {
				setArgs( ( prevArgs ) => (
					{
						...prevArgs,
						submit_type: newVal,
					}
				) );
			} }
		/>


		<ToggleControl
			key={ 'enable_progress' }
			label={ __( 'Enable form pages progress', 'jet-from-builder' ) }
			checked={ args.enable_progress }
			help={ __( 'Displays the progress of a multi-page form',
				'jet-form-builder' ) }
			onChange={ () => {
				setArgs( prev => {
					const enable_progress = !Boolean( prev.enable_progress );

					return { ...prev, enable_progress };
				} );
			} }
		/>
	</>;
}