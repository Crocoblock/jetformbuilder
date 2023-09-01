import BaseSignal from './BaseSignal';
import { isEmpty } from '../functions';

/**
 * @property input {RadioData}
 */
function SignalRadio() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return 'radio' === node.type;
	};

	this.runSignal = function () {
		this.input.calcValue = 0;
		let isCheckedCustom  = !isEmpty( this.input.value.current );

		for ( const node of this.input.nodes ) {
			if ( node.dataset.custom ) {
				continue;
			}
			node.checked = this.input.value.current === node.value;

			if ( !node.checked ) {
				continue;
			}

			isCheckedCustom = false;

			this.input.calcValue += parseFloat(
				node.dataset?.calculate ?? node.value,
			);

			this.triggerJQuery( node );
			break;
		}

		if ( !this.input.hasCustom ) {
			return;
		}

		const lastNode = this.input.lastNode();
		const input    = this.input.getCustomInput();

		lastNode.checked = isCheckedCustom;

		if ( input.disabled === isCheckedCustom ) {
			input.disabled = !isCheckedCustom;
		}

		const value = this.input.value.current;

		if ( !isCheckedCustom || input.value === value ) {
			return;
		}

		input.value = true === value ? '' : value;
	};
}

SignalRadio.prototype = Object.create( BaseSignal.prototype );

export default SignalRadio;