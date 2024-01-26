import resolveLabel from '../resolveLabel';
import resolveLegend from '../resolveLegend';
import getInputNumberAttrs from '../getInputNumberAttrs';
import resolveOptionLabel from '../resolveOptionLabel';

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

	yield {
		name: 'jet-forms/text-field',
		attributes,
		innerBlocks: [],
	};
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

	yield {
		name: 'jet-forms/color-picker-field',
		attributes,
		innerBlocks: [],
	};
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
		label: resolveLegend( input ) || resolveLabel( input ),
		required: input.required,
	};

	for ( const optionNode of optionNodes ) {
		attributes.field_options.push( {
			value: optionNode.value,
			label: resolveOptionLabel( optionNode ),
		} );

		if ( optionNode.checked ) {
			attributes.default = optionNode.value;
		}
	}

	yield {
		name: 'jet-forms/radio-field',
		attributes,
		innerBlocks: [],
	};
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
		label: resolveLegend( input ) || resolveLabel( input ),
		required: input.required,
	};

	for ( const optionNode of optionNodes ) {
		attributes.field_options.push( {
			value: optionNode.value,
			label: resolveOptionLabel( optionNode ),
		} );
	}

	yield {
		name: 'jet-forms/checkbox-field',
		attributes,
		innerBlocks: [],
	};
}

function* dateParser( input ) {
	yield {
		name: 'jet-forms/date-field',
		attributes: getInputNumberAttrs( input ),
		innerBlocks: [],
	};
}

function* dateTimeParser( input ) {
	yield {
		name: 'jet-forms/datetime-field',
		attributes: getInputNumberAttrs( input ),
		innerBlocks: [],
	};
}

function* timeParser( input ) {
	yield {
		name: 'jet-forms/time-field',
		attributes: getInputNumberAttrs( input ),
		innerBlocks: [],
	};
}

function* hiddenParser( input ) {
	yield {
		name: 'jet-forms/hidden-field',
		attributes: {
			name: input.name,
			class_name: input.className,
			default: input.value,
		},
		innerBlocks: [],
	};
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

	yield {
		name: 'jet-forms/media-field',
		attributes,
		innerBlocks: [],
	};
}

function* numberParser( input ) {
	const attributes       = getInputNumberAttrs( input );
	attributes.placeholder = input.placeholder;

	if ( input.hasAttribute( 'step' ) ) {
		attributes.step = input.step;
	}

	yield {
		name: 'jet-forms/number-field',
		attributes,
		innerBlocks: [],
	};
}

/**
 * @param input {HTMLInputElement}
 */
function* rangeParser( input ) {
	const attributes = getInputNumberAttrs( input );

	if ( input.hasAttribute( 'step' ) ) {
		attributes.step = input.step;
	}

	yield {
		name: 'jet-forms/range-field',
		attributes,
		innerBlocks: [],
	};
}

function* submitParser( input ) {
	yield {
		name: 'jet-forms/submit-field',
		attributes: {
			label: input.value || 'Submit',
			class_name: input.className,
		},
		innerBlocks: [],
	};
}

export default inputParser;