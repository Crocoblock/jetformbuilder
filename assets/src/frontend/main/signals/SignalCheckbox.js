import BaseSignal from './BaseSignal';

function SignalCheckbox() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return 'checkbox' === node.type;
	};
	this.runSignal   = function () {
		this.input.calcValue = 0;

		for ( const node of this.input.nodes ) {
			node.checked = this.input.value.current?.includes( node.value );

			if ( !node.checked ) {
				continue;
			}

			this.input.calcValue += parseFloat(
				node.dataset?.calculate ?? node.value,
			);
		}
	};
}

SignalCheckbox.prototype = Object.create( BaseSignal.prototype );

export default SignalCheckbox;