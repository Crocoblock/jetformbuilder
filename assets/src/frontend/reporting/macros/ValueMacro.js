import DynamicMacro from './DynamicMacro';

class ValueMacro extends DynamicMacro {

	getSlug() {
		return 'value';
	}

	isSupported( restriction ) {
		return true;
	}

	value() {
		return this.restriction.getValue();
	}

}

export default ValueMacro;