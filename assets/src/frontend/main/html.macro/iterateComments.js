function* iterateComments(
	rootNode, acceptCallback = () => NodeFilter.FILTER_ACCEPT ) {
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

	// eslint-disable-next-line no-cond-assign
	while ( curNode = iterator.nextNode() ) {
		curNode.nodeValue = curNode.nodeValue.trim();

		yield curNode;
	}
}

export default iterateComments;