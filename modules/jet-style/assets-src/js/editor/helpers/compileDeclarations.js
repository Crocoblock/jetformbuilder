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
 * @param supportConfig
 * @returns {{style: Object, className: String}}
 */
function compileDeclarations( styleRoot, supportConfig ) {
	const declarations = {};
	const classNames   = [];

	for ( const [ cssVar, path ] of Object.entries( supportConfig ) ) {
		const compiler = getSupportedCompiler( path ).
			setCssVar( cssVar ).
			setPath( path );

		compiler.compileDeclarations( styleRoot, declarations, classNames )
		compiler.compileClassNames( classNames, styleRoot );
	}

	return {
		style: declarations,
		className: classNames.join( ' ' ),
	};
}

/**
 * @param path
 * @returns {BaseCSSCompiler}
 */
function getSupportedCompiler( path ) {
	for ( const compiler of compilers ) {
		if ( !compiler.isSupported( path ) ) {
			continue;
		}

		return compiler;
	}

	throw new Error( 'Something went wrong' );
}

export default compileDeclarations;

