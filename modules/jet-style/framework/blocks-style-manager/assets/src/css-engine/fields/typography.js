import BaseField from "./base-field";

export default class Typography extends BaseField {

	static getType() {
		return 'typography';
	}

	getParsedValue() {
		return {
			family: this.rawValue.family || 'inherit',
			weight: this.rawValue.weight || 'inherit',
			transform: this.rawValue.transform || 'inherit',
			style: this.rawValue.style || 'inherit',
			decoration: this.rawValue.decoration || 'inherit',
			lineheight: this.rawValue.lineheight || 'inherit',
			lh_unit: '', // legacy from old SM for style decorations consisitency
			letterspacing: this.rawValue.letterSpacing || 'inherit',
			ls_unit: '', // legacy from old SM for style decorations consisitency
			size: this.rawValue.size || 'inherit',
			s_unit: '', // legacy from old SM for style decorations consisitency
		};
	}
}
