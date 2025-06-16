import BaseField from "./base-field";

export default class Range extends BaseField {

	static getType() {
		return 'range';
	}

	getParsedValue() {
		return {
			value: this.rawValue || 0,
			unit: '',
		}
	}
}
