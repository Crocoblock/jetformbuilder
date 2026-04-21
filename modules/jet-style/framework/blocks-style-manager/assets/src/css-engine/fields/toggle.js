import BaseField from "./base-field";

export default class Toggle extends BaseField {

	static getType() {
		return 'toggle';
	}

	getParsedValue() {
		return {
			value: this.rawValue || null,
		}
	}
}
