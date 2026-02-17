import BaseField from "./base-field";
import { isObject } from "../../helpers/utils";

export default class Dimensions extends BaseField {

	static getType() {
		return 'dimensions';
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
		let parsedVar = '';
		let result = {};

		if ( ! isObject( parsedValues ) ) {
			return result;
		}

		let sidesMap = [ 'top', 'right', 'bottom', 'left' ];
		let eachEmpty = true;

		for ( const side of sidesMap ) {

			if ( parsedValues[ side ] ) {
				eachEmpty = false;
			}

			parsedVar += `${ parsedValues[ side ] || 0 } `;
		}

		if ( eachEmpty ) {
			return result;
		} else {
			result[ fullName ] = parsedVar.trim();
		}

		return result;
	}

	getParsedValue() {

		if ( ! this.rawValue ) {
			return {
				top: '',
				right: '',
				bottom: '',
				left: '',
			};
		}

		let value = {};

		if ( isObject( this.rawValue ) ) {
			value = {
				top: this.rawValue.top || '',
				right: this.rawValue.right || '',
				bottom: this.rawValue.bottom || '',
				left: this.rawValue.left || '',
			};
		} else {
			value = {
				top: this.rawValue,
				right: this.rawValue,
				bottom: this.rawValue,
				left: this.rawValue,
			};
		}

		/**
		 * Check - if values has no other units provided - assume it's pixels
		 */
		for ( const side in value ) {

			if ( ! value[ side ] ) {
				value[ side ] = '0';
			}

			if ( ! value[ side ].match( /[^\d]+$/ ) ) {
				value[ side ] += 'px';
			}
		}

		return value;
	}
}
