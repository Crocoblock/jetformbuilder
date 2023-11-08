import resolveLabel from './resolveLabel';

/**
 * @param input {HTMLInputElement}
 */
function getInputNumberAttrs( input ) {
	const attributes = {
		name: input.name,
		class_name: input.className,
		default: input.value,
		label: resolveLabel( input ),
		required: input.required,
	};

	if ( input.hasAttribute( 'min' ) ) {
		attributes.min = input.min;
	}

	if ( input.hasAttribute( 'max' ) ) {
		attributes.max = input.max;
	}

	return attributes;
}

export default getInputNumberAttrs;