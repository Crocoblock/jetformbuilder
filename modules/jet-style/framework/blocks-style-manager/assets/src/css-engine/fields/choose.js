import BaseField from "./base-field";

export default class Choose extends BaseField {

	static getType() {
		return 'choose';
	}

	getSelectorMacros() {
		return {
			wrapper: 'body .is-root-container .' + this.uniqueClassName
		};
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
}