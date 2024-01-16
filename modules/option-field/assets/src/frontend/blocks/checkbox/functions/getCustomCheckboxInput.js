function getCustomCheckboxInput( node ) {
	return node.nextElementSibling.querySelector( 'input.text-field' );
}

export default getCustomCheckboxInput;