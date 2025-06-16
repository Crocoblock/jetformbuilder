import BaseField from "./base-field";
import { isObject } from "../../helpers/utils";

export default class Dimensions extends BaseField {

	static getType() {
		return 'dimensions';
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

		if ( isObject( this.rawValue ) ) {
			return {
				top: this.rawValue.top || '',
				right: this.rawValue.right || '',
				bottom: this.rawValue.bottom || '',
				left: this.rawValue.left || '',
			};
		} else {
			return {
				top: this.rawValue,
				right: this.rawValue,
				bottom: this.rawValue,
				left: this.rawValue,
			};
		}
	}
}
