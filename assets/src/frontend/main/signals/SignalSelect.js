import BaseSignal from './BaseSignal';
import { isSelect } from '../supports';

function SignalSelect() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return isSelect( node );
	};
	this.runSignal   = function () {
		this.input.calcValue = 0;
		const [ node ]       = this.input.nodes;
		const isMultiple     = 'select-one' !== node?.type;
		const { value }      = this.input;

		for ( const option of node.options ) {
			option.selected = isMultiple
			                  ? value.current?.includes( option.value )
			                  : option.value === value.current;

			if ( !option.selected ) {
				continue;
			}

			this.input.calcValue += parseFloat(
				option.dataset?.calculate ?? option.value,
			);
		}

		this.triggerJQuery( node );
	};
}

SignalSelect.prototype = Object.create( BaseSignal.prototype );

export default SignalSelect;