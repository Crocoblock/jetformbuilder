import resolveLabel from '../resolveLabel';
import resolveLegend from '../resolveLegend';
import getInputNumberAttrs from '../getInputNumberAttrs';

const typeMap = {
	email: textParser,
	tel: textParser,
	url: textParser,
	password: textParser,
	text: textParser,
	color: colorPickerParser,
	radio: radioParser,
	checkbox: checkboxParser,
	date: dateParser,
	datetime: dateTimeParser,
	'datetime-local': dateTimeParser,
	time: timeParser,
	file: mediaParser,
	hidden: hiddenParser,
	number: numberParser,
	range: rangeParser,
	submit: submitParser,
};

function* inputParser( input ) {
	input.type = input.type || 'text';

	if ( !typeMap.hasOwnProperty( input.type ) ) {
		return;
	}

	const generator = typeMap[ input.type ];

	yield* generator( input );
}

/**
 * @param input {HTMLInputElement}
 * @returns {Generator<*, (string|{name, field_type})[], *>}
 */
function* textParser( input ) {
	const attributes = {
		field_type: input.type,
		name: input.name,
		class_name: input.className,
		default: input.value,
		label: resolveLabel( input ),
		required: input.required,
		placeholder: input.placeholder,
	};

	if ( input.hasAttribute( 'maxlength' ) ) {
		attributes.maxlength = input.maxLength;
	}

	if ( input.hasAttribute( 'minlength' ) ) {
		attributes.minlength = input.minLength;
	}

	yield [ 'jet-forms/text-field', attributes ];
}

/**
 * @param input {HTMLInputElement}
 * @returns {Generator<*, (string|{name, field_type})[], *>}
 */
function* colorPickerParser( input ) {
	const attributes = {
		name: input.name,
		class_name: input.className,
		default: input.value,
		label: resolveLabel( input ),
		required: input.required,
	};

	yield [ 'jet-forms/color-picker-field', attributes ];
}

/**
 * @param input {HTMLInputElement}
 * @returns {Generator<*, (string|{name, field_type})[], *>}
 */
function* radioParser( input ) {
	if ( input.jfbObserved ) {
		return;
	}
	const root = input.getRootNode();

	/**
	 * @type {HTMLInputElement[]}
	 */
	const optionNodes = Array.from(
		root.querySelectorAll(
			`input[type="radio"][name="${ input.name }"]`,
		),
	);

	// prevent parsing future radio nodes
	optionNodes.forEach( node => { node.jfbObserved = true; } );

	const attributes = {
		name: input.name,
		class_name: input.className,
		field_options: [],
		label: resolveLegend( input ),
		required: input.required,
	};

	for ( const optionNode of optionNodes ) {
		attributes.field_options.push( {
			value: optionNode.value,
			label: resolveLabel( optionNode ),
		} );

		if ( optionNode.checked ) {
			attributes.default = optionNode.value;
		}
	}

	yield [ 'jet-forms/radio-field', attributes ];
}

/**
 * @param input {HTMLInputElement}
 * @returns {Generator<*, (string|{name, field_type})[], *>}
 */
function* checkboxParser( input ) {
	if ( input.jfbObserved ) {
		return;
	}
	const root = input.getRootNode();

	/**
	 * @type {HTMLInputElement[]}
	 */
	const optionNodes = Array.from(
		root.querySelectorAll(
			`input[type="checkbox"][name="${ input.name }"]`,
		),
	);

	// prevent parsing future radio nodes
	optionNodes.forEach( node => { node.jfbObserved = true; } );

	const attributes = {
		name: input.name,
		class_name: input.className,
		field_options: [],
		label: resolveLegend( input ),
		required: input.required,
	};

	for ( const optionNode of optionNodes ) {
		attributes.field_options.push( {
			value: optionNode.value,
			label: resolveLabel( optionNode ),
		} );
	}

	yield [ 'jet-forms/checkbox-field', attributes ];
}

function* dateParser( input ) {
	yield [ 'jet-forms/date-field', getInputNumberAttrs( input ) ];
}

function* dateTimeParser( input ) {
	yield [ 'jet-forms/datetime-field', getInputNumberAttrs( input ) ];
}

function* timeParser( input ) {
	yield [ 'jet-forms/time-field', getInputNumberAttrs( input ) ];
}

function* hiddenParser( input ) {
	yield [
		'jet-forms/hidden-field',
		{
			name: input.name,
			class_name: input.className,
			default: input.value,
		},
	];
}

function* mediaParser( input ) {
	const attributes = {
		name: input.name,
		class_name: input.className,
		label: resolveLabel( input ),
		required: input.required,
		allowed_mimes: [],
	};

	attributes.allowed_mimes = input.accept.split( ',' ).map(
		part => part.trim(),
	);

	yield [ 'jet-forms/media-field', attributes ];
}

function* numberParser( input ) {
	const attributes       = getInputNumberAttrs( input );
	attributes.placeholder = input.placeholder;

	if ( input.hasAttribute( 'step' ) ) {
		attributes.step = input.step;
	}

	yield [ 'jet-forms/number-field', getInputNumberAttrs( input ) ];
}

/**
 * @param input {HTMLInputElement}
 * @returns {Generator<string[], void, *>}
 */
function* rangeParser( input ) {
	const attributes = getInputNumberAttrs( input );

	if ( input.hasAttribute( 'step' ) ) {
		attributes.step = input.step;
	}

	yield [ 'jet-forms/range-field' ];
}

function* submitParser( input ) {
	yield [
		'jet-forms/submit-field',
		{
			label: input.value || 'Submit',
			class_name: input.className,
		},
	];
}

export default inputParser;