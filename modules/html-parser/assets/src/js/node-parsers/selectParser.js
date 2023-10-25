import resolveLabel from '../resolveLabel';

function* selectParser( select ) {
	const attributes = {
		name: select.name,
		class_name: select.className,
		label: resolveLabel( select ),
		required: select.required,
		field_options: [],
	};

	const optionEntries = Object.entries( select.options );

	for ( const [ index, option ] of optionEntries ) {
		if ( 0 === +index && !option.value ) {
			attributes.placeholder = option.label;

			continue;
		}

		attributes.field_options.push( {
			value: option.value,
			label: option.label,
		} );

		if ( ! option.selected ) {
			continue;
		}

		attributes.default = option.value;
	}

	yield [ 'jet-forms/select-field', attributes ];
}

export default selectParser;