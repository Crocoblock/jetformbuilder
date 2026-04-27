export default class BaseField {

	static getType() {
		return 'base-field';
	}

	constructor( uniqueClassName, rawValue ) {
		this.uniqueClassName = uniqueClassName;
		this.rawValue = rawValue;
	}

	getSelectorMacros() {
		return {
			wrapper: 'body .is-root-container .' + this.uniqueClassName,
			id: this.uniqueClassName
		};
	}

	parseSelector( selector, props ) {

		const macros = this.getSelectorMacros();

		selector = this.replaceData( selector, macros );
		props    = this.getParsedProps( props );

		let css = ` ${ selector } { ${ props } }`;

		return css;
	}

	getParsedProps( props ) {
		const values = this.getParsedValue();
		return this.replaceData( props, values );
	}

	/**
	 * Replace in the give string macros with an actual values from the data.
	 *
	 * Expected formats:
	 * - string: {{ WRAPPER }} .my-class
	 * - data: { 'wrapper': '.csm-block-unique-class' }
	 */
	replaceData( string, data ) {

		return string.replace( /{{\s*([\w-]+)\s*}}/g, ( match, p1 ) => {
			p1 = p1.toLowerCase();
			if ( undefined !== data[ p1 ] ) {
				return data[ p1 ];
			} else {
				return match;
			}
		} );
	}

	getParsedValue() {
		return {
			'value': this.rawValue,
		};
	}

	cssVarValueFormat() {
		return '{{VALUE}}';
	}

	isValidValueForVar( value, key ) {

		if ( 'inherit' === value || 'initial' === value || 'unset' === value ) {
			return false;
		}

		if ( 'undefined' === typeof value || null === value ) {
			return false;
		}

		if ( 'object' === typeof value && ! Object.keys( value ).length ) {
			return false;
		}

		if ( 'string' === typeof value && ! value.trim() ) {
			return false;
		}

		if ( 'number' === typeof value && isNaN( value ) ) {
			return false;
		}

		if ( 'function' === typeof value ) {
			return false;
		}

		return true;
	}

	parseVariable( variable ) {

		const prefix = variable.prefix || '';
		const name = variable.name || false;

		let fullName = variable.full_name || prefix + '-' + name;

		if ( ! fullName ) {
			return '';
		}

		if ( variable.suffix ) {
			fullName += variable.suffix;
		}

		let parsedValues = this.getParsedValue();
		let result = {};

		if ( parsedValues.value ) {
			result[ fullName ] = parsedValues.value;
		} else {

			for ( const key in parsedValues ) {
				if (
					parsedValues.hasOwnProperty( key )
					&& this.isValidValueForVar( parsedValues[ key ], key )
				) {
					result[ fullName + '__' + key ] = parsedValues[ key ];
				}
			}
		}

		return result;
	}
}