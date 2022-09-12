function appendNodes( container, nodes ) {
	for ( const child of container.children ) {
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

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isFile( node ) {
	return 'file' === node.type;
}

export { appendNodes, createFileList, isFile };