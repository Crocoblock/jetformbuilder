import resolveLabel from '../resolveLabel';

/**
 * @param textarea {HTMLTextAreaElement}
 */
function* textAreaParser( textarea ) {
	const attributes = {
		name: textarea.name,
		class_name: textarea.className,
		label: resolveLabel( textarea ),
		required: textarea.required,
		placeholder: textarea.placeholder,
	};

	if ( textarea.hasAttribute( 'maxlength' ) ) {
		attributes.maxlength = textarea.maxLength;
	}

	if ( textarea.hasAttribute( 'minlength' ) ) {
		attributes.minlength = textarea.minLength;
	}

	yield {
		name: 'jet-forms/textarea-field',
		attributes,
		innerBlocks: [],
	};
}

export default textAreaParser;