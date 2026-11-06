import sanitizeHtml from 'sanitize-html';

const div = document.createElement( 'div' );

function getFormInnerHTML( htmlContent ) {
	const clean = sanitizeHtml(htmlContent, {
		allowedTags: [
			'form',
			'input',
			'select',
			'option',
			'textarea',
			'button',
			'fieldset',
			'legend',
			'label',
			'div',
			'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
			'span',
			'p',
			'br'
		],
		/**
		 * Only the attributes the node parsers read. `false` would mean
		 * "allow every attribute" in sanitize-html, event handlers included,
		 * and this HTML (an AI response) is previewed in the admin.
		 */
		allowedAttributes: {
			'*': [
				'name', 'type', 'value', 'placeholder', 'required', 'min', 'max',
				'step', 'multiple', 'checked', 'selected', 'id', 'for', 'class',
				'maxlength', 'minlength', 'accept', 'label', 'rows', 'cols',
				'pattern', 'title', 'disabled', 'readonly', 'autocomplete',
			],
		},
	});

	// <template> content is inert: nothing loads or runs while it is parsed.
	const template = document.createElement('template');
	template.innerHTML = clean;

	const form = template.content.querySelector('form');
	return form ? form.innerHTML : '';
}

export default getFormInnerHTML;