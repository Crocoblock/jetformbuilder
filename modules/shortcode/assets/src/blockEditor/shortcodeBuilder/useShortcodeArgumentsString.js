import { useContext } from '@wordpress/element';
import { FormAttributesContext } from 'jet-form-builder-use-form';

function useShortcodeArgumentsString() {
	const { formId, args } = useContext( FormAttributesContext );

	const preparedArgs = Object.entries( {
		form_id: formId,
		submit_type: args?.submit_type ?? 'reload',
		required_mark: args?.required_mark ?? '*',
		fields_layout: args?.fields_layout ?? 'column',
		fields_label_tag: args?.fields_label_tag ?? 'div',
		markup_type: args?.markup_type ?? 'div',
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