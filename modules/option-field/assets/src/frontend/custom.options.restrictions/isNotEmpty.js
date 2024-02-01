const {
	      isEmpty,
      } = JetFormBuilderFunctions;

const isNotEmptySingle = value => (
	'boolean' !== typeof value && !isEmpty( value )
);

/**
 * @param input {InputData}
 */
function isNotEmpty( input ) {
	const value = input.getValue();

	if ( !input.isArray() ) {
		return isNotEmptySingle( value );
	}

	return value.some( isNotEmptySingle );
}

export default isNotEmpty;