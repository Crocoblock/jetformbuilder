import DynamicMacro from './DynamicMacro';

class MinAttrMacro extends DynamicMacro {

	getSlug() {
		return 'min';
	}

	isSupported( restriction ) {
		return restriction.hasOwnProperty( 'min' );
	}

	value() {
		return this.restriction?.min ?? '';
	}

}

export default MinAttrMacro;