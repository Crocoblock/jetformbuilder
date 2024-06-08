function resolveCheckMark( node ) {
	return node.closest(
		'.checkradio-wrap'
	).querySelector(
		'.jet-form-builder__field-template .jet-fb-check-mark input'
	);
}

export default resolveCheckMark;