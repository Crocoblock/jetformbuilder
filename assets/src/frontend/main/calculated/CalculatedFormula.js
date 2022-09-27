/**
 * @param formula
 * @param root {Observable}
 * @constructor
 */
import applyFilters from './applyFilters';
import getFilters from './getFilters';
import replaceStatic from './replaceStatic';

const {
	      applyFilters: wpFilters,
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.custom.formula.macro',
	'jet-form-builder',
	replaceStatic,
);

function CalculatedFormula( formula, root ) {
	this.formula = formula;
	this.parts   = [];
	this.related = [];

	this.observe( formula, root );
}

CalculatedFormula.prototype = {
	// raw value
	formula: null,
	parts: [],
	related: [],
	regexp: /%(.*?)%/g,
	/**
	 * @type {Function}
	 */
	setResult: () => {
		throw new Error( 'CalculatedFormula.setResult is not set!' );
	},
	/**
	 *
	 * @param relatedInput {InputData}
	 * @param filters {Filter[]}
	 * @return {*}
	 */
	relatedCallback( relatedInput, filters ) {
		return applyFilters( relatedInput.value.current, filters );
	},
	/**
	 * @private
	 * @param value
	 * @param root {Observable}
	 */
	observe( value, root ) {
		if ( Array.isArray( value ) ) {
			value.forEach( item => {
				this.observe( item, root );
			} );

			return;
		}
		const rawParts = value.split( this.regexp );

		if ( 1 === rawParts.length ) {
			return;
		}

		this.parts = rawParts.map( current => {
			const [ name, ...filters ] = current.split( '|' );
			const relatedInput         = root.getInput( name );

			if ( !relatedInput && !name.includes( '::' ) ) {
				return current;
			}

			const filtersList = getFilters( filters );

			if ( name.includes( '::' ) ) {
				return wpFilters(
					'jet.fb.custom.formula.macro',
					current,
					name,
					filtersList,
					root,
				);
			}

			if ( !this.related.includes( relatedInput.name ) ) {
				this.related.push( relatedInput.name );

				relatedInput.watch( () => this.setResult() );
			}

			return () => this.relatedCallback( relatedInput, filtersList );
		} );
	},
	calculate() {
		if ( !this.parts.length ) {
			return this.formula;
		}

		const formula = this.parts.map( current => {
			if ( 'string' === typeof current ) {
				return current;
			}
			const result = current();

			return null === result ? 0 : result;
		} ).join( '' );

		return (
			new Function( 'return ' + formula )
		)();
	},
};

export default CalculatedFormula;