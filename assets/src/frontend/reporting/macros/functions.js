import ValueMacro from './ValueMacro';
import MinAttrMacro from './MinAttrMacro';
import MaxAttrMacro from './MaxAttrMacro';

const macros = () => [
	new ValueMacro(),
	new MinAttrMacro(),
	new MaxAttrMacro(),
];

/**
 * @param restriction {Restriction}
 */
function getSupportedMacros( restriction ) {
	const response = {};

	for ( const macro of macros() ) {
		if ( !macro.isSupported( restriction ) ) {
			continue;
		}
		macro.setRestriction( restriction );

		response[ macro.getSlug() ] = macro;
	}

	return response;
}

export {
	getSupportedMacros,
};