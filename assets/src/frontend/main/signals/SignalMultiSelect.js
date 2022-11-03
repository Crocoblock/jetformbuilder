import BaseSignal from './BaseSignal';
import { isMultiSelect } from '../supports';

function SignalMultiSelect() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return isMultiSelect( node );
	};
	this.runSignal   = function () {
		this.input.calcValue = 0;
		const [ node ]       = this.input.nodes;

		for ( const option of node.options ) {
			option.selected = this.input.value.current?.includes(
				option.value );

			if ( !option.selected ) {
				continue;
			}

			this.input.calcValue += parseFloat(
				option.dataset?.calculate ?? option.value,
			);
		}
	};
}

SignalMultiSelect.prototype = Object.create( BaseSignal.prototype );

export default SignalMultiSelect;