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

const {
	      applyFilters: deprecatedApplyFilters = false,
      } = window?.JetFormBuilderMain?.filters ?? {};

addFilter(
	'jet.fb.custom.formula.macro',
	'jet-form-builder',
	attachConstNamespace,
);

/**
 * @param formula {String}
 * @param root {InputData|Observable}
 */
function CalculatedFormula( formula, root ) {
	this.formula      = formula;
	this.parts        = [];
	this.related      = [];
	this.relatedAttrs = [];

	if ( root instanceof InputData ) {
		this.input = root;
	}

	this.observe( formula, this.input?.root ?? root );
}

CalculatedFormula.prototype = {
	// raw value
	formula: null,
	parts: [],
	related: [],
	relatedAttrs: [],
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

		const rawParts = value.split( /%(.*?)%/g );

		if ( 1 === rawParts.length ) {
			return;
		}

		this.parts = rawParts.map( current => {
			const [ name, ...filters ] = current.split( '|' );
			const parsedName           = name.match( /[\w\-:]+/g );

			if ( !parsedName ) {
				return current;
			}

			const [ fieldName, ...params ] = parsedName;

			const relatedInput = fieldName !== 'this'
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
	calculateString() {
		if ( !this.parts.length ) {
			return this.formula;
		}

		return this.parts.map( current => {
			if ( 'function' !== typeof current ) {
				if ( !this.input?.nodes || false === deprecatedApplyFilters ) {
					return current;
				}
				current = wpFilters(
					'jet.fb.onCalculate.part',
					current,
					this
				);
				return deprecatedApplyFilters(
					'forms/calculated-formula-before-value',
					current,
					jQuery( this.input.nodes[ 0 ] )
				);
			}
			const result = current();

			return null === result ? 0 : result;
		} ).join( '' );
	},
	calculate() {
		if ( !this.parts.length ) {
			return this.formula;
		}
		const formula = this.calculateString();

		return (
			new Function( 'return ' + formula )
		)();
	},
};

export default CalculatedFormula;