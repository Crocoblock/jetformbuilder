function* buttonParser( button ) {
	if (!button.type || button.type && button.type !== 'submit') {
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