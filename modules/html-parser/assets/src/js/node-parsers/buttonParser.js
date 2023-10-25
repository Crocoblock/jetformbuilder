function* buttonParser( button ) {
	button.type = button.type || 'submit';

	if ( 'submit' !== button ) {
		return;
	}

	yield [
		'jet-forms/submit-field',
		{
			label: button.innerHTML.trim(),
			class_name: button.className,
		}
	];
}

export default buttonParser;