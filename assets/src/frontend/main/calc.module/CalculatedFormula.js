/**
 * @param formula
 * @param root    {Observable}
 * @class
 */
import applyFilters from './applyFilters';
import getFilters from './getFilters';
import attachConstNamespace from './attachConstNamespace';
import InputData from '../inputs/InputData';
import { __, sprintf } from '@wordpress/i18n';

const {
	      applyFilters: wpFilters,
	      addFilter,
      } = JetPlugins.hooks;

addFilter(
	'jet.fb.custom.formula.macro',
	'jet-form-builder',
	attachConstNamespace,
);

/**
 * @param root    {InputData|Observable}
 * @param options {{forceFunction: boolean}}
 */
function CalculatedFormula(
	root,
	options = {},
) {
	this.parts        = [];
	this.related      = [];
	this.relatedAttrs = [];
	this.regexp       = /%([\w\-].*?\S?)%/g;
	this.watchers     = [];

	const { forceFunction = false } = options;

	this.forceFunction = forceFunction;

	if ( root instanceof InputData ) {
		this.input = root;
	}

	this.root = this.input?.root ?? root;
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
	 * @type {Observable|ObservableRow}
	 */
	root: null,
	/**
	 * @type {RegExp}
	 */
	regexp: null,
	forceFunction: false,
	/**
	 * @type {Function}
	 */
	setResult: () => {
		throw new Error( 'CalculatedFormula.setResult is not set!' );
	},
	/**
	 *
	 * @param  relatedInput {InputData}
	 * @return {*}
	 */
	relatedCallback( relatedInput ) {
		return relatedInput.value.current;
	},
	/**
	 *
	 * @param value
	 */
	observe( value ) {
		this.formula = value;

		if ( !Array.isArray( value ) ) {
			this.observeItem( value );

			return;
		}

		value.forEach( item => {
			this.observeItem( item );
		} );
	},
	/**
	 * @private
	 * @param value {String}
	 */
	observeItem( value ) {
		let match;
		let prevIndex = 0;

		value += '';

		while ( (
			match = this.regexp.exec( value )
		) !== null ) {
			const part = this.observeMacro( match[ 1 ] );

			if ( 0 !== match.index ) {
				this.parts.push( value.slice( prevIndex, match.index ) );
			}

			prevIndex = match.index + match[ 0 ].length;

			if ( false === part ) {
				this.onMissingPart( match[ 0 ] );
			}
			else {
				this.parts.push( part );
			}
		}

		// save last part
		if ( prevIndex === value.length ) {
			return;
		}

		this.parts.push( value.slice( prevIndex ) );

		if ( 1 === this.parts.length ) {
			this.parts = [];
		}
	},
	/**
	 * @param inputMatch {String}
	 */
	onMissingPart( inputMatch ) {
		this.parts.push( inputMatch );
	},
	/**
	 * @param  current {String}
	 * @return {(function(): *)|*}
	 */
	// eslint-disable-next-line max-lines-per-function
	observeMacro( current ) {
		if ( null === this.formula ) {
			this.formula = current;
		}

		// eslint-disable-next-line @wordpress/no-unused-vars-before-return
		const [ name, ...filters ] = current.split( '|' );
		const parsedName           = name.match( /[\w\-:]+/g );

		if ( !parsedName ) {
			return false;
		}

		const [ fieldName, ...params ] = parsedName;

		const relatedInput = fieldName !== 'this'
		                     ? this.root.getInput( fieldName )
		                     : this.input;

		if ( !relatedInput && !fieldName.includes( '::' ) ) {
			return false;
		}

		// eslint-disable-next-line @wordpress/no-unused-vars-before-return
		const filtersList = getFilters( filters );

		if ( fieldName.includes( '::' ) ) {
			const customValue = wpFilters(
				'jet.fb.custom.formula.macro',
				false,
				fieldName,
				params,
				this,
			);

			if ( false === customValue ) {
				return false;
			}

			if ( 'function' === typeof customValue ) {
				return () => applyFilters( customValue(), filtersList );
			}

			return applyFilters( customValue, filtersList );
		}

		if ( !this.related.includes( relatedInput.name ) ) {
			this.related.push( relatedInput.name );

			this.watchers.push(
				relatedInput.watch( () => this.setResult() ),
			);
		}

		if ( !params?.length ) {
			return () => applyFilters(
				this.relatedCallback( relatedInput ),
				filtersList,
			);
		}

		const [ attrName ] = params;

		if ( !relatedInput.attrs.hasOwnProperty( attrName ) ) {
			return false;
		}
		/**
		 * @type {BaseHtmlAttr}
		 */
		const htmlAttr = relatedInput.attrs[ attrName ];

		if ( !this.relatedAttrs.includes( relatedInput.name + attrName ) ) {
			this.relatedAttrs.push( relatedInput.name + attrName );

			this.watchers.push(
				htmlAttr.value.watch( () => this.setResult() ),
			);
		}

		return () => applyFilters( htmlAttr.value.current, filtersList );
	},
	calculateString() {
		if ( !this.parts.length ) {
			return this.formula;
		}

		const {
			      applyFilters: deprecatedApplyFilters = false,
		      } = window?.JetFormBuilderMain?.filters ?? {};

		return this.parts.map( current => {
			if ( 'function' !== typeof current ) {
				if ( !this.input?.nodes || false === deprecatedApplyFilters ) {
					return current;
				}
				current = wpFilters(
					'jet.fb.onCalculate.part',
					current,
					this,
				);
				return deprecatedApplyFilters(
					'forms/calculated-formula-before-value',
					current,
					jQuery( this.input.nodes[ 0 ] ),
				);
			}
			const result = current();

			return (
				       null === result ||
				       '' === result ||
				       Number.isNaN( result )
			       ) ? this.emptyValue() : result;
		} ).join( '' );
	},
	emptyValue() {
		return '';
	},
	calculate() {
		if ( !this.parts.length && !this.forceFunction ) {
			return this.formula;
		}
		const formula = this.calculateString();

		try {
			return (
				new Function( 'return ' + formula )
			)();
		}
		catch ( error ) {
			//console.error( error );
			this.showError( formula );
		}

	},
	clearWatchers() {
		this.watchers.forEach(
			current => 'function' === typeof current && current(),
		);
		this.watchers     = [];
		this.relatedAttrs = [];
		this.related      = [];
	},
	/* eslint-disable no-console */
	showError( formula ) {
		console.group(
			__(
				'JetFormBuilder: You have invalid calculated formula',
				'jet-form-builder',
			),
		);

		this.showErrorDetails( formula );

		console.groupEnd();
	},
	showErrorDetails( formula ) {
		console.error(
			sprintf(
				// translators: %s - initial formula
				__( 'Initial: %s', 'jet-form-builder' ),
				this.formula,
			),
		);
		console.error(
			sprintf(
				// translators: %s - computed formula
				__( 'Computed: %s', 'jet-form-builder' ),
				formula,
			),
		);

		if ( !this.input && !this.root?.parent ) {
			return;
		}

		if ( this.input ) {
			console.error(
				sprintf(
					// translators: %s - filed name
					__( 'Field: %s', 'jet-form-builder' ),
					this.input.path.join( '.' ),
				),
			);

			return;
		}

		const index = this.root.parent.findIndex( this.root );

		console.error(
			sprintf(
				// translators: %s - path to current field
				__( 'Scope: %s', 'jet-form-builder' ),
				[
					...this.root.parent.path,
					-1 === index ? '' : index,
				].filter( Boolean ).join( '.' ),
			),
		);
	},
	/* eslint-enable no-console */
};

export default CalculatedFormula;