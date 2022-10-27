function appendNodes( container, nodes ) {
	/**
	 * We use querySelectorAll because we need a static set of elements.
	 * If you apply the .children or .childNodes property,
	 * they will always return the list of currently available elements.
	 */
	let children = container.querySelectorAll(
		'.jet-form-builder-file-upload__file',
	);

	for ( const child of children ) {
		if ( nodes.some( node => node.isEqualNode( child ) ) ) {
			continue;
		}
		child.remove();
	}
	for ( const index in nodes ) {
		if ( !nodes.hasOwnProperty( index ) ) {
			continue;
		}
		const node = nodes[ index ];

		if ( node.isConnected ) {
			continue;
		}

		container.appendChild( node );
	}
}

/**
 * @param inputFileArray
 * @returns {FileList}
 */
function createFileList( inputFileArray ) {
	const transfer = new DataTransfer();

	for ( const file of inputFileArray ) {
		transfer.items.add( file );
	}

	return transfer.files;
}

function createFile( blob, fileName ) {
	return new File( [ blob ], fileName, blob );
}

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isFile( node ) {
	return 'file' === node.type;
}

export { appendNodes, createFileList, isFile, createFile };