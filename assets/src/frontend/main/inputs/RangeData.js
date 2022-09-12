import InputData from './InputData';
import { isRange } from '../supports';

function RangeData() {
	InputData.call( this );

	/**
	 * @type {HTMLElement}
	 */
	this.numberNode = null;
	this.isSupported = function ( node ) {
		return isRange( node );
	};
	this.setNode     = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.numberNode = node.parentElement.querySelector(
			'.jet-form-builder__field-value-number',
		);

		this.numberNode.textContent = '' + node.max || 100;
	};
}

RangeData.prototype = Object.create( InputData.prototype );

export default RangeData;