/**
 * @property {ConditionalBlock} block
 */
class ConditionItem {

	isSupported( options ) {
		return false;
	}

	observe() {
	}

	setOptions( options ) {
	}

	isPassed() {
		throw new Error( 'You must provide ConditionItem::isPassed function' );
	}

	setBlock( block ) {
		this.block = block;
	}
}

export default ConditionItem;