import InputData from './InputData';
import { isRange } from '../supports';

class RangeData extends InputData {

	constructor() {
		super();

		/**
		 * @type {HTMLElement}
		 */
		this.numberNode = null;
	}

	isSupported( node ) {
		return isRange( node );
	}

	setNode( node ) {
		super.setNode( node );

		this.numberNode = node.parentElement.querySelector(
			'.jet-form-builder__field-value-number',
		);

		this.numberNode.textContent = '' + node.max || 100;
	}

}

export default RangeData;