/**
 * @param node {HTMLElement}
 */
function getWrapper( node ) {
	return node.closest( '.jet-form-builder-row' );
}

/**
 * @param node {HTMLElement}
 */
function getNodeValidationType( node ) {
	const wrapper                 = getWrapper( node );
	const { validationType = '' } = wrapper?.dataset ?? {};

	return validationType;
}

/**
 * @param input {InputData}
 */
function getInheritValidationType( input ) {
	const form          = input.getSubmit();
	const { type = '' } = window.JetFormsValidation[ form.getFormId() ] ?? {};

	return type;
}

function getValidationMessages( node ) {
	const wrapper                       = getWrapper( node );
	const { validationMessages = '{}' } = wrapper?.dataset ?? {};

	return JSON.parse( validationMessages );
}

/**
 * @param restriction {Restriction}
 * @param slug {string}
 * @return {string}
 */
function getMessageBySlug( restriction, slug ) {
	const { reporting } = restriction;
	const message       = reporting.messages[ slug ] ?? '';

	if ( message && 'inherit' !== reporting.type ) {
		return message;
	}

	const form         = reporting.input.getSubmit();
	const { messages } = window.JetFormsValidation[ form.getFormId() ] ?? {};

	return messages[ slug ] ?? '';
}

export {
	getNodeValidationType,
	getInheritValidationType,
	getValidationMessages,
	getMessageBySlug,
};