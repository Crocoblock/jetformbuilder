/**
 * @param formula
 * @param root {Observable}
 */
function CalculatedFormula( formula, root ) {
	this.formula = formula;
	this.observe( formula, root );
}

CalculatedFormula.prototype = {
	// raw value
	formula: null,
	parts: [],
	related: [],
	regexp: /%([\w\-]+)%/g,
	/**
	 * @type {Function}
	 */
	setResult: () => {
		throw new Error( 'CalculatedFormula.setResult is not set!' );
	},
	/**
	 * @param relatedInput {InputData}
	 */
	relatedCallback( relatedInput ) {
		return relatedInput.value.current;
	},
	/**
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
			const relatedInput = root.getInput( current );

			if ( !relatedInput ) {
				return current;
			}

			if ( !this.related.includes( relatedInput.name ) ) {
				this.related.push( relatedInput.name );

				relatedInput.watch( () => this.setResult() );
			}

			return () => this.relatedCallback( relatedInput );
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

			if ( !Number.isNaN( Number( result ) ) && result ) {
				return result;
			}

			return `'${ result }'`;

		} ).join( '' );

		return (
			new Function( 'return ' + formula )
		)();
	},
};

export default CalculatedFormula;