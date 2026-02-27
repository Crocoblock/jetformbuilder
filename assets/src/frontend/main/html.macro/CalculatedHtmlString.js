import CalculatedFormula from '../calc.module/CalculatedFormula';

const { applyFilters } = JetPlugins.hooks;

function CalculatedHtmlString(
	root,
	{ withPrefix = true, macroHost = false, ...options } = {},
) {
	CalculatedFormula.call( this, root, options );

	if ( withPrefix ) {
		this.regexp = /JFB_FIELD::(.+)/gi;
	}

	this.macroHost = macroHost || false;

	this.relatedCallback = function ( input ) {
		const $fieldNode = jQuery( input.nodes[ 0 ] );
		const $macroHost = this.macroHost ? jQuery( this.macroHost ) : false;

		let fieldValue = applyFilters(
			'jet.fb.macro.field.value',
			false,
			$fieldNode,
			$macroHost,
		);

		fieldValue = wp?.hooks?.applyFilters
			? wp.hooks.applyFilters(
				'jet.fb.macro.field.value',
				fieldValue,
				$fieldNode,
				$macroHost,
			)
			: fieldValue;

		return false === fieldValue ? input.value.current : fieldValue;
	}.bind( this );

	this.onMissingPart = function () {};
}

CalculatedHtmlString.prototype = Object.create( CalculatedFormula.prototype );

CalculatedHtmlString.prototype.calculateString = function () {
	if ( !this.parts.length ) {
		return this.formula;
	}

	return this.parts
		.map( ( current ) => {
			if ( 'function' !== typeof current ) {
				return current;
			}

			const result = current();

			return ( null === result || '' === result ) ? '' : result;
		} )
		.join( '' );
};

export default CalculatedHtmlString;
