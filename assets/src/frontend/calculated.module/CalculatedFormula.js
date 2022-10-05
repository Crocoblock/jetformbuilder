/**
 * @param formula
 * @param root {Observable}
 * @constructor
 */
import applyFilters from './applyFilters';
import getFilters from './getFilters';
import attachConstNamespace from './attachConstNamespace';

const {
	      InputData,
      } = JetFormBuilderAbstract;
const {
	      applyFilters: wpFilters,
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.custom.formula.macro',
	'jet-form-builder',
	attachConstNamespace,
);

/**
 * @param formula {String}
 * @param root {InputData|Observable}
 * @constructor
 */
function CalculatedFormula( formula, root ) {
	this.formula      = formula;
	this.parts        = [];
	this.related      = [];
	this.relatedAttrs = [];

	if ( root instanceof InputData ) {
		this.input = root;
		this.related.push( root.name );
	}

	this.observe( formula, this.input?.root ?? root );
}

CalculatedFormula.prototype = {
	// raw value
	formula: null,
	parts: [],
	related: [],
	relatedAttrs: [],
	regexp: /%(.*?)%/g,
	/**
	 * @type {InputData}
	 */
	input: null,
	/**
	 * @type {Function}
	 */
	setResult: () => {
		throw new Error( 'CalculatedFormula.setResult is not set!' );
	},
	/**
	 *
	 * @param relatedInput {InputData}
	 * @return {*}
	 */
	relatedCallback( relatedInput ) {
		return relatedInput.value.current;
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
			const [ name, ...filters ]     = current.split( '|' );
			const [ fieldName, ...params ] = name.match( /[\w\-:]+/g );

			const relatedInput = name !== 'this'
			                     ? root.getInput( fieldName )
			                     : this.input;

			if ( !relatedInput && !fieldName.includes( '::' ) ) {
				return current;
			}

			const filtersList = getFilters( filters );

			if ( fieldName.includes( '::' ) ) {
				const customValue = wpFilters(
					'jet.fb.custom.formula.macro',
					false,
					fieldName,
					params,
					root,
					this,
				);

				if ( false === customValue ) {
					return current;
				}

				return applyFilters( customValue, filtersList );
			}

			if ( !this.related.includes( relatedInput.name ) ) {
				this.related.push( relatedInput.name );

				relatedInput.watch( () => this.setResult() );
			}

			if ( !params?.length ) {
				return () => applyFilters(
					this.relatedCallback( relatedInput ),
					filtersList,
				);
			}

			const [ attrName ] = params;

			if ( !relatedInput.attrs.hasOwnProperty( attrName ) ) {
				return current;
			}
			/**
			 * @type {BaseHtmlAttr}
			 */
			const htmlAttr = relatedInput.attrs[ attrName ];

			if ( !this.relatedAttrs.includes( relatedInput.name + attrName ) ) {
				this.relatedAttrs.push( relatedInput.name + attrName );

				htmlAttr.value.watch( () => this.setResult() );
			}

			return () => applyFilters( htmlAttr.value.current, filtersList );
		} );
	},
	calculate() {
		if ( !this.parts.length ) {
			return this.formula;
		}

		const formula = this.parts.map( current => {
			if ( 'function' !== typeof current ) {
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