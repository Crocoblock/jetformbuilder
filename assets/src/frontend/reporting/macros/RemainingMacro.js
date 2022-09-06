import DynamicMacro from './DynamicMacro';

class RemainingMacro extends DynamicMacro {

	getSlug() {
		return 'remaining';
	}

	isSupported( restriction ) {
		return restriction.hasOwnProperty( 'max' );
	}

	value() {
		const { max } = this.restriction;
		const value   = this.restriction.getValue();

		return max - value;
	}

}

export default RemainingMacro;