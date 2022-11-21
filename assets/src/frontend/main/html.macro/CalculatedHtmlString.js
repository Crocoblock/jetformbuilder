import CalculatedFormula from '../calc.module/CalculatedFormula';

const {
	      applyFilters,
      } = wp.hooks;

function CalculatedHtmlString( root, options ) {
	CalculatedFormula.call( this, root, options );

	this.regexp = /JFB_FIELD::(.+)/gi;

	this.relatedCallback = function ( input ) {
		let fieldValue = applyFilters(
			'jet.fb.macro.field.value',
			false,
			jQuery( input.nodes[ 0 ] ),
		);

		return false === fieldValue ? input.value.current : fieldValue;
	};

	this.onMissingPart = function ( inputMatch ) {
	};
}

CalculatedHtmlString.prototype = Object.create( CalculatedFormula.prototype );

CalculatedHtmlString.prototype.calculateString = function () {
	if ( !this.parts.length ) {
		return this.formula;
	}

	return this.parts.map( current => {
		if ( 'function' !== typeof current ) {
			return current;
		}
		const result = current();

		return (
			       null === result || '' === result
		       ) ? '' : result;
	} ).join( '' );
};

export default CalculatedHtmlString;