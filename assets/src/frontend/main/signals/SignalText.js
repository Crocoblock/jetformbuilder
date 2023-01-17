import BaseSignal from './BaseSignal';

function SignalText() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return true;
	};
	this.runSignal   = function () {
		this.input.calcValue = Number.isNaN( Number( this.input.calcValue ) )
		                       ? this.input.calcValue
		                       : parseFloat( this.input.calcValue );

		const [ node ] = this.input.nodes;

		if ( node.value !== this.input.value.current ) {
			node.value = this.input.value.current;
		}
	};
}

SignalText.prototype = Object.create( BaseSignal.prototype );

export default SignalText;