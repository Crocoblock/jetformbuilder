function* iterateComments(
	rootNode, acceptCallback = node => NodeFilter.FILTER_ACCEPT ) {
	// Fourth argument, which is actually obsolete according to the
	// DOM4 standard, is required in IE 11
	const iterator = document.createNodeIterator(
		rootNode,
		NodeFilter.SHOW_COMMENT,
		{
			acceptNode: acceptCallback,
		},
	);
	let curNode;

	while ( curNode = iterator.nextNode() ) {
		curNode.nodeValue = curNode.nodeValue.trim();

		yield curNode;
	}
}

export default iterateComments;