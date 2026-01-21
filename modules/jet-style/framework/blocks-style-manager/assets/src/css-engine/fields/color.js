import BaseField from "./base-field";

export default class Color extends BaseField {
	static getType() {
		return 'color-picker';
	}
}
