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
		allowedAttributes: false
	});

	const div = document.createElement('div');
	div.innerHTML = clean;

	const form = div.querySelector('form');
	return form ? form.innerHTML : '';
}

export default getFormInnerHTML;