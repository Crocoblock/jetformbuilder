const div = document.createElement( 'div' );

function getFormInnerHTML( htmlContent ) {
	div.innerHTML = htmlContent.trim();

	const form = div.querySelector( 'form' );

	return form.innerHTML;
}

export default getFormInnerHTML;