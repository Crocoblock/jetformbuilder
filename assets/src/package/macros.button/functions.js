/**
 * @param initial     {String}
 * @param name        {String}
 * @param nodeElement {HTMLInputElement}
 */
function insertMacro( initial, name, nodeElement ) {
	const start = nodeElement.selectionStart,
	      end   = nodeElement.selectionEnd;

	initial = initial ?? '';

	if ( ! initial.length ) {
		name = `'${ name }'`;
	}

	let startString = initial.slice( 0, start );
	const endString = initial.slice( end );

	startString = startString + name;

	setTimeout( () => {
		nodeElement.focus();
		nodeElement.selectionStart = startString.length;
		nodeElement.selectionEnd   = startString.length;
	} );

	return startString + endString;
}

export { insertMacro };