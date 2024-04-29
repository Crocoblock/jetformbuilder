function* buttonParser( button ) {
	button.type = button.type || 'submit';

	if ( 'submit' !== button ) {
		return;
	}

	yield {
		name: 'jet-forms/submit-field',
		attributes: {
			label: button.innerHTML.trim(),
			class_name: button.className,
		},
		innerBlocks: [],
	};
}

export default buttonParser;