function resolveCheckMark( node ) {
	return node.closest(
		'.checkradio-wrap'
	).querySelector(
		'.jet-form-builder__field-template .wp-block-jet-forms-check-mark input'
	);
}

export default resolveCheckMark;