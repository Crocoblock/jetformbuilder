const {
	      useMetaState,
      } = JetFBHooks;
const {
	      TextControl,
	      SelectControl,
	      ToggleControl,
      } = wp.components;

const { __ } = wp.i18n;

const source = window.JetFormEditorData.argumentsSource || {};

// eslint-disable-next-line max-lines-per-function
export default function PluginArgs() {

	const [ args, setArgs ] = useMetaState( '_jf_args' );

	return <>
		<SelectControl
			label={ __( 'Fields Layout', 'jet-form-builder' ) }
			value={ args?.fields_layout ?? '' }
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
			value={ args?.required_mark ?? '' }
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
			value={ args?.fields_label_tag ?? '' }
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
			value={ args?.submit_type ?? '' }
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
			label={ __( 'Enable form pages progress', 'jet-form-builder' ) }
			checked={ args?.enable_progress ?? false }
			help={ __( 'Displays the progress of a multi-page form',
				'jet-form-builder' ) }
			onChange={ () => {
				setArgs( prev => {
					const enableProgress = !Boolean( prev.enable_progress );

					return { ...prev, enable_progress: enableProgress };
				} );
			} }
		/>
		<ToggleControl
			key={ 'clear_on_ajax' }
			label={ __( 'Clear data on success submit', 'jet-form-builder' ) }
			checked={ args?.clear ?? false }
			help={ __( 'Remove input values on successful submit',
				'jet-form-builder' ) }
			onChange={ () => {
				setArgs( prev => (
					{ ...prev, clear: !Boolean( prev.clear ) }
				) );
			} }
		/>
	</>;
}