/**
 * @param node {HTMLElement}
 */
function getWrapper( node ) {
	return node.closest( '.jet-form-builder-row' );
}

/**
 * @param node {HTMLElement}
 */
function getValidationType( node ) {
	const wrapper                 = getWrapper( node );
	const { validationType = '' } = wrapper?.dataset ?? {};

	return validationType;
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

	if ( message ) {
		return message;
	}

	const form     = reporting.input.getSubmit();
	const messages = window.JetFormsValidation[ form.getFormId() ] ?? {};

	return messages[ slug ] ?? '';
}

export {
	getValidationType,
	getValidationMessages,
	getMessageBySlug,
};