import DynamicMacro from './DynamicMacro';

class MaxAttrMacro extends DynamicMacro {

	getSlug() {
		return 'max';
	}

	isSupported( restriction ) {
		return restriction.hasOwnProperty( 'max' );
	}

	value() {
		return this.restriction?.max ?? '';
	}

}

export default MaxAttrMacro;