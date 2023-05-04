import BaseCSSCompiler from '../abstract/BaseCSSCompiler';
import BorderCSSCompiler from '../abstract/BorderCSSCompiler';
import BorderRadiusCSSCompiler from '../abstract/BorderRadiusCSSCompiler';

const compilers = [
	new BorderRadiusCSSCompiler(),
	new BorderCSSCompiler(),
	new BaseCSSCompiler(),
];

/**
 * @since 3.1.0
 *
 * @param styleRoot
 * @param response
 * @param cssVar
 * @param path
 * @returns {{}}
 */
function compileDeclarations( styleRoot, response, cssVar, path ) {
	for ( const compiler of compilers ) {
		if ( !compiler.isSupported( path ) ) {
			continue;
		}

		return compiler.setCssVar( cssVar ).
			modifyDeclarations( styleRoot, response, path );
	}

	return {};
}

export default compileDeclarations;

