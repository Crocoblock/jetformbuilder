import ValueMacro from './ValueMacro';
import MinAttrMacro from './MinAttrMacro';
import MaxAttrMacro from './MaxAttrMacro';

const {
	      applyFilters,
      } = wp.hooks;

const macros = applyFilters(
	'jet.fb.restrictions.macros',
	[
		ValueMacro,
		MinAttrMacro,
		MaxAttrMacro,
	],
);

/**
 * @param restriction {Restriction}
 */
function getSupportedMacros( restriction ) {
	const response = {};

	for ( const macro of macros ) {
		const current = new macro();

		if ( !current.isSupported( restriction ) ) {
			continue;
		}
		current.setRestriction( restriction );

		response[ current.getSlug() ] = current;
	}

	return response;
}

export {
	getSupportedMacros,
};