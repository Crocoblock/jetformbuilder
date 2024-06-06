import { useSelect } from '@wordpress/data';

const {
	      useMetaState,
      } = JetFBHooks;

function useShortcodeArgumentsString() {
	const formId = useSelect( select => (
		select( 'core/editor' ).getEditedPostAttribute( 'id' )
	), [] );

	const [ args ] = useMetaState( '_jf_args' );

	const preparedArgs = Object.entries( {
		form_id: formId,
		submit_type: args?.submit_type ?? 'reload',
		required_mark: args?.required_mark ?? '*',
		fields_layout: args?.fields_layout ?? 'column',
		fields_label_tag: args?.fields_label_tag ?? 'div',
		enable_progress: Number( args?.enable_progress ?? '' ),
		clear: Number( args?.clear ?? '' ),
	} );

	return preparedArgs.map(
		( [ argName, argValue ] ) => (
			argName + '="' + argValue + '"'
		),
	).join( ' ' );
}

export default useShortcodeArgumentsString;